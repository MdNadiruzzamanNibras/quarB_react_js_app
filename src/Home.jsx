import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




const Home = () => {
    const [datas, setdatas] =useState([])
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=> setdatas(data))
    },[])
    const navigate = useNavigate()
    const PurchaseNavigate = id=>{
        navigate(`/detai/${id}`)
    }
    console.log(datas);
    return (
        <div>
            <Table className="w-50 mx-auto mt-5" striped bordered hover>
      <thead>
        <tr className="text-center">
          <th>No.</th>
          <th>Name</th>
          <th>Site</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>

        {
            datas.map((data, index)=> <tr key={data.score}>
                <td>{index+1}</td>
                <td>{data?.show?.name}</td>
                <td>{data?.show?.officialSite ? data?.show?.officialSite :'No site availbale'}</td>
                <td><Button className="ms-5 " onClick={()=>PurchaseNavigate(data?.show?.id)} variant="light">
                   
                  Details
                 
                  </Button></td>
              </tr> 
              )
        }
        
        
      </tbody>
    </Table>
        </div>
    );
};

export default Home;
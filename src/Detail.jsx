import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {id} = useParams
    const [data, setdata] =useState([])
    useEffect(()=>{
        const uri = `https://api.tvmaze.com/search/shows?q=all/:${id}`
        fetch(uri)
        .then(res=>res.json())
        .then(data=> setdata(data))
       
    },[])
    console.log(data, id);
    return (
        <div>
            
        </div>
    );
};

export default Detail;
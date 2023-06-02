import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/detai/:id",
      element: <Detail/>,
    },
  ]);
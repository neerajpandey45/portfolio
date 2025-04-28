import { useState } from 'react';
import About from "./about";
import Project from './project';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from './scrolltoTop';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const router=createBrowserRouter([
    
    {
      path:"/",
      element: <About/>,
    },
    {
      path:"/project",
      element:<Project/>
    }

  ])
  return (
    <RouterProvider router={router}>
    <ScrollToTop/>
  </RouterProvider>
);
}
export default App

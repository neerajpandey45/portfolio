import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Port from './port';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<Port/>,
  }
])
  return (
   
<RouterProvider router={router} />

  )
};

export default App

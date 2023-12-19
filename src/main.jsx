import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ProductPage from './pages/products/ProductPage.jsx';
import Voxpage from './pages/voxmain/Voxpage.jsx';
import ProductDetail from './pages/productDetail/ProductDetail.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/vox-produits",
    element: <ProductPage/>,
  },
  {
    path: "/vox-link",
    element: <Voxpage/>,
  },
  {
    path: "/details",
    element: <ProductDetail/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

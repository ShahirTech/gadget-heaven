import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from "./error-page";
import "./index.css";
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistic/Statistics';
import Cart from './components/Cart/Cart';
import Whishlist from './components/Whishlist/Whishlist';
import About from './components/About/About';
import ProductDetails from './components/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/productdetails/:id",
        element:<ProductDetails></ProductDetails>,
        loader: ()=>fetch('/gadgets.json'),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,  //Dashboard Layout
        children: [
          {
            index: true,
            element: <Cart /> 
          },
          {
            path: "cart",
            element: <Cart />,
            loader: ()=>fetch('/gadgets.json'),
          },
          {
            path: "whishlist",
            element: <Whishlist />,
            loader: ()=>fetch('/gadgets.json'), 
          }
        ]
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>,
        loader: ()=>fetch('/gadgets.json'),
      },
      {
        path: "/about",
        element:<About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
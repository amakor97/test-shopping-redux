import { createBrowserRouter } from "react-router-dom";

import App from "../App.js";
import CatalogPage from "../pages/CatalogPage";
import CartPage from "../pages/CartPage";


const routes = [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <CatalogPage/>
      },
      {
        path: "/cart",
        element: <CartPage/>
      }
    ]
  }
];


export const router = createBrowserRouter(routes);
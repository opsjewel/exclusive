

import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../../Pages/Home";
import Product from "../../Pages/Product";
import ProductDetails from "../../Pages/ProductDetails";
import Cart from "../../Pages/Cart";
import About from "../../Pages/About";
import Registration from "../Registration/Registration";
import LogIn from "../Registration/LogIn";
import Contact from "../../Pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: "/product", Component: Product },
      { path: "/product/:id", Component: ProductDetails },
      { path: "/about", Component: About },
      { path: "/cart", Component: Cart },
      { path: "/signup", Component: Registration },
      { path: "/login", Component: LogIn },
      { path: "/contact", Component: Contact },
    ],
  },
]);

export default router
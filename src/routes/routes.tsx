import ProductDetail from "@/pages/ProductDetail/ProductDetail";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Cart from "../pages/Cart/Cart";
import Favorite from "../pages/Favorite/Favorite";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routes;

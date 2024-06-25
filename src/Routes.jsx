import Landing from "./components/product/PLP/Landing";
import Product from "./components/product/PDP/Product";
import Layout from "./components/common/Layout";
import { lazy, Suspense } from "react";

const Cart = lazy(() => import("./components/product/cart/Cart"));

const routes = [
   {
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Landing />
         },
         {
            path: "/product/:productId",
            element: <Product />
         },
         {
            path: "/cart",
            element: <Suspense><Cart /></Suspense>
         }
      ],
   }
];

export default routes;
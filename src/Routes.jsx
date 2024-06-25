import Landing from "./components/product/PLP/Landing";
import Cart from "./components/product/cart/Cart";
import Product from "./components/product/PDP/Product";
import Layout from "./components/common/Layout";

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
            element: <Cart />
         }
      ],
   }
];

export default routes;
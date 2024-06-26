import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { addItem } from "../../../store/CartSlice";
import Quantity from "../../Quantity";
import Toaster from "../../Toaster";
import ProductShimmerUI from "./ProductShimmerUI";

const Product = () => {
   const { productId } = useParams();
   const { isLoading, product, error } = useProduct(productId);
   const dispatch = useDispatch();
   const [quantity, setQuantity] = useState(1);
   const [show, setShow] = useState(false);
   const handleAddToCart = () => {
      product['quantity'] = quantity;
      dispatch(addItem(product));
      setShow(true);
   }
   const setNewQuantity = (newQuantity) => {
      setQuantity(newQuantity);
   }
   if (isLoading) return <ProductShimmerUI />

   return <div className="bg-[#F5F5F5] common-padding">
      <Toaster message="Item Added to Cart" show={show} setShow={setShow} />
      <div className="container mx-auto pt-10 px-[15px] py-[80px]">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="h-[300px] md:h-[400px] lg:h-[500px] w-auto mx-auto object-contain">
               <img src={product.image} alt={product.title} className="h-full w-full" />
            </div>
            <div>
               <h2 className="text-lg md:text-3xl font-bold mb-3">{product.title}</h2>
               <p className="text-lg md:text-2xl font-semibold mb-3">${product.price}</p>
               <p className="text-base md:text-lg font-normal mb-4">{product.description}</p>
               <div className="py-5">
                  <Quantity defaultValue={1} productId={product.id} updateQuantity={setNewQuantity} />
               </div>
               {
                  !show ? <button disabled={show} className="transition linear delay-450 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white py-3 rounded w-full text-xl" onClick={handleAddToCart}>Add To Cart</button>
                     :
                     <Link to="/cart" className="block text-center transition linear delay-450 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white py-3 rounded w-full text-xl">Goto Cart</Link>
               }
            </div>
         </div>
      </div>

   </div>
}

export default Product;
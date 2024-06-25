import React, { useEffect, useState } from 'react';
import { FaCircleCheck, FaCircleMinus, FaPencil, FaTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, removeItem, updateQuantity } from '../../../store/CartSlice';
import Quantity from '../../Quantity';
import Toaster from '../../Toaster';
import CartShimmerUI from './CartShimmerUI';

const Cart = () => {
   const [isLoading, setIsLoading] = useState(true);
   const dispatch = useDispatch();
   const cartItems = useSelector((store) => store.cart.items);

   const [quantity, setQuantity] = useState(1);
   const [edit, setEdit] = useState(false);
   const [show, setShow] = useState(false);

   const handleRemoveItem = (id) => dispatch(removeItem(id));

   const handleClearCart = () => dispatch(clearCart());

   const setNewQuantity = (newQuantity) => setQuantity(newQuantity);

   const handleQuantityChange = (productId) => {
      dispatch(updateQuantity({ productId, quantity }));
      setEdit(false);
      setShow(true);
   }

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false)
      }, 1000);
      return () => clearTimeout(timer);
   }, []);

   const getTotalPrice = () => {
      return cartItems.reduce((sum, i) => sum + (i.price * i.quantity), 0)
   }

   if (isLoading) return <CartShimmerUI />

   return (
      <div className="container mx-auto px-[15px] common-padding">
         <Toaster message="Item quantity updated" show={show} setShow={setShow} />
         <h2 className="text-3xl font-cormorant-garamond font-semibold pb-5 my-5 border-b border-gray-300">
            Cart
         </h2>
         {
            cartItems.length > 0 ? (<>

               <div className='text-end'><button className='text-lg font-normal ml-auto text-red-600' onClick={handleClearCart}>Clear cart <FaCircleMinus className='inline' /></button></div>
               <div className=''>
                  {
                     cartItems.map((item) =>
                        <div key={item.id} className='flex justify-between items-center border-b border-slate-200 py-4 flex-col md:flex-row'>
                           <div className='flex items-center gap-5'>
                              <div className='w-[150px] h-[150px]'>
                                 <img src={item.image} alt={item.title} className='w-full h-full object-contain' />
                              </div>
                              <div>
                                 <div>{item.title}</div>
                                 <div>${item.price}</div>
                              </div>
                           </div>
                           <div className='flex items-center'>
                              {
                                 edit ?
                                    <div className='flex items-center'>
                                       <Quantity defaultValue={item.quantity} productId={item.id} updateQuantity={setNewQuantity} />
                                       <button className='text-lg ml-4' onClick={() => handleQuantityChange(item.id)}>
                                          <FaCircleCheck />
                                       </button>
                                    </div>
                                    :
                                    <button className='px-4 text-indigo-500' onClick={() => setEdit(true)}>
                                       <FaPencil />
                                    </button>
                              }
                              <button className='px-4 text-pink-900' onClick={() => handleRemoveItem(item.id)}>
                                 <FaTrashCan />
                              </button>
                           </div>
                        </div>
                     )
                  }
                  <div className='text-end text-xl font-semibold py-5'>
                     Total ${getTotalPrice()}
                  </div>
               </div>
            </>) : (
               <h3 className='text-xl font-normal'>Your Shoppig bag is empty <Link to="/" className='text-indigo-500'>Continue Shopping...</Link></h3>
            )
         }

      </div>
   )
}

export default Cart
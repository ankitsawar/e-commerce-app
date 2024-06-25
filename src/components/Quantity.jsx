import { useState } from "react";
const Quantity = ({ defaultValue, updateQuantity }) => {
   const [quantity, setQuantity] = useState(defaultValue);

   return (
      <div className="py-5">
         <button
            onClick={() => {
               const updatedQuantity = quantity !== 1 ? quantity - 1 : quantity;
               setQuantity(updatedQuantity);
               updateQuantity(updatedQuantity);
            }}
            className="border border-indigo-300 h-[38px] w-[40px]">
            -
         </button>
         <input
            type="number"
            disabled
            className="w-[50px] text-center h-[38px] border border-slate-400 border-l-0 border-r-0 focus:outline-none"
            value={quantity}
         />
         <button
            onClick={() => {
               const updatedQuantity = quantity + 1;
               setQuantity(updatedQuantity);
               updateQuantity(updatedQuantity)
            }}
            className="border border-indigo-300 h-[38px] w-[40px]">
            +
         </button>
      </div>
   )
}

export default Quantity;
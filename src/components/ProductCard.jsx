import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
   return (
      <Link to={`/product/${product.id}`}>
         <div className="hover:shadow-lg p-5 flex flex-col h-full">
            <div>
               <img src={product.image} alt={product.title} className="w-[300px] h-[300px] mx-auto object-contain" />
            </div>
            <div className="mt-6 text-center h-full flex flex-col">
               <div className="flex-auto shrink-0">
                  <h2 className="text-md font-medium ">{product.title}</h2>
               </div>
               <p className="text-base font-normal">${product.price}</p>
            </div>
         </div>
      </Link>
   )
}

export default ProductCard;
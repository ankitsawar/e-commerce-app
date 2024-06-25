import { Link } from "react-router-dom";
import { categories } from "../../utils/Constants";

const Menu = ({ menuClose }) => {
   return (
      <ul className="flex flex-col lg:flex-row justify-center items-center w-full px-4 lg:px-0 ">
         <li className="mx-3 py-4 md:py-0" key="shop-0" onClick={() => menuClose(false)}>
            <Link className="text-2xl lg:text-base text-[#54565A] leading-8 capitalize" to="/">Shop</Link>
         </li>
         {
            categories.map((category, i) => <li onClick={() => menuClose(false)} className="mx-3 py-4 md:py-0" key={category.name + "-" + i}>
               <Link className="text-2xl lg:text-base text-[#54565A] leading-8 capitalize" to={`/?category=${category.slug}`}>
                  {category.name}
               </Link>
            </li>)
         }
      </ul>
   )
}

export default Menu;
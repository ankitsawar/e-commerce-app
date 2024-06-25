import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoBagSharp, IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const cartCount = useSelector(store => store.cart.items.length);
   return (
      <header className="h-[60px] w-screen shadow-md flex items-center fixed bg-white">
         <nav className="container mx-auto px-[15px]">
            <div className="flex justify-between items-center">
               <div className="flex items-center">
                  <Link className="font-cormorant-garamond text-2xl font-medium" to="/">Logo</Link>
               </div>
               <div className="lg:hidden flex items-center">
                  <Link to="/cart" className="relative">
                     <IoBagSharp className="text-base" />
                     <span className="flex w-4 h-4 text-center items-center justify-center text-[12px] rounded-full border border-gray-400 absolute -right-2 -top-2">{cartCount}</span>
                  </Link>

                  <button aria-label="navigation" type="button" onClick={() => setIsOpen(!isOpen)}
                     className="lg:hidden text-2xl ml-4 text-gray-900 transition duration-300 focus:outline-none">
                     {!isOpen ? <HiBars3 /> : <IoCloseSharp />}
                  </button>
               </div>
               <div className="hidden lg:flex">
                  <Menu menuClose={setIsOpen} />
               </div>

               <div className="hidden lg:flex">
                  <Link to="/cart" className="relative">
                     <IoBagSharp className="text-base" />
                     <span className="flex w-4 h-4 text-center items-center justify-center text-[12px] rounded-full border border-gray-400 absolute -right-2 -top-2">{cartCount}</span>
                  </Link>
               </div>

               {/* MOBILE MENU  */}
               <div id="mobileMenu" className={`w-full mx-auto py-8 text-center h-[100vh] fixed bg-[#ffffff] shadow-md top-0 left-0 ${isOpen ? 'flex' : 'hidden'}`}>
                  <button aria-label="navigation" type="button" onClick={() => setIsOpen(!isOpen)}
                     className="lg:hidden text-3xl ml-4 text-gray-900 transition duration-300 focus:outline-none fixed top-5 right-3">
                     {!isOpen ? <HiBars3 /> : <IoCloseSharp />}
                  </button>
                  <Menu menuClose={setIsOpen} />
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Header;
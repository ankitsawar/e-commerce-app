import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="">
         <div className="bg-indigo-800 py-10">
            <div className="container mx-auto px-[15px]">
               <div className="flex lg:items-center flex-col lg:flex-row gap-10 lg:gap-2">
                  <div className="basis-full lg:basis-6/12 text-white flex">
                     <div className="basis-6/12 text-center lg:text-left">
                        <ul>
                           <li>
                              <Link className="text-lg" to="/">Home</Link>
                           </li>
                           <li>
                              <Link className="text-lg" to="/">Shop</Link>
                           </li>
                           <li>
                              <Link className="text-lg" to="/electronics">Electronics</Link>
                           </li>
                        </ul>
                     </div>
                     <div className="basis-6/12 text-center lg:text-left">
                        <ul>
                           <li>
                              <Link className="text-lg" to="/mens-clothing">Mens</Link>
                           </li>
                           <li>
                              <Link className="text-lg" to="/womens-clothing">Womens</Link>
                           </li>
                           <li>
                              <Link className="text-lg" to="/jewelery">Jewellery</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="basis-full lg:basis-6/12 text-white ">
                     <ul className="flex lg:justify-end justify-center">
                        <li className="mx-2 px-4 bg-white w-[40px] h-[40px] flex justify-center items-center rounded-md">
                           <a className="text-black" href=""><FaFacebookF /></a>
                        </li>
                        <li className="mx-2 px-4 bg-white w-[40px] h-[40px] flex justify-center items-center rounded-md">
                           <a className="text-black" href=""><FaTwitter /></a>
                        </li>
                        <li className="mx-2 px-4 bg-white w-[40px] h-[40px] flex justify-center items-center rounded-md">
                           <a className="text-black" href=""><FaInstagram /></a>
                        </li>
                        <li className="mx-2 px-4 bg-white w-[40px] h-[40px] flex justify-center items-center rounded-md">
                           <a className="text-black" href=""><FaYoutube /></a>
                        </li>
                        <li className="mx-2 px-4 bg-white w-[40px] h-[40px] flex justify-center items-center rounded-md">
                           <a className="text-black" href=""><FaLinkedinIn /></a>
                        </li>
                     </ul>
                  </div>
               </div>

            </div>
         </div>
         <div>
            <div className="bg-slate-100">
               <div className="container mx-auto px-[15px] py-5">
                  <p className="text-center lg:text-left text-lg font-semibold">Copyright © 2024 MyIndia </p>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Layout = () => {
   return (
      <main className="font-poppins">
         <Header />
         <div className="pt-[60px] min-h-[80vh]">
            <Outlet />
         </div>
         <Footer />
      </main>
   )
}

export default Layout;
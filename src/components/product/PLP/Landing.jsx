import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import { getCategoryBySlug } from "../../../utils/Helpers";
import ProductCard from "../../ProductCard";
import ListingShimmerUI from "./ListingShimmerUI";

const Landing = () => {
   const [searchParams, setSearchParams] = useSearchParams();

   const getNewQuery = () => {
      const categorySlug = searchParams.get("category");
      const result = getCategoryBySlug(categorySlug);
      return result !== null ? result : "";
   }

   const [query, setQuery] = useState(searchParams.size > 0 ? getNewQuery().query : "");

   useEffect(() => {
      setQuery(searchParams.size > 0 ? getNewQuery().query : "");
   }, [searchParams]);

   const { isLoading, products, error } = useProducts(query);
   if (isLoading) return <ListingShimmerUI />;

   return (
      <div className="container mx-auto mt-10 px-[15px] common-padding">
         <div>
            <h2 className="text-3xl font-cormorant-garamond font-semibold pb-5 my-5 border-b border-gray-300">
               {
                  searchParams.size > 0 ? (getNewQuery() !== "" ? getNewQuery().name : "Shop") : "Shop"
               }
            </h2>
            <div className="flex justify-between">
               <p className="font-mono text-base font-normal text-gray-600">Showing all {products.length} results</p>
            </div>
            {
               error !== "" ?
                  <div className="bg-red-600">{error}</div>
                  :
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center place-items-center gap-x-4 gap-y-10 mt-10">
                     {
                        products.map(product => <ProductCard key={product.id} product={product} />)
                     }
                  </div>
            }
         </div>
      </div>
   )
}

export default Landing;
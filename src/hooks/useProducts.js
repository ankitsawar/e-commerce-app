import { useEffect, useState } from "react";
import { API_URL } from "../utils/Constants";

const useProducts = (query) => {
   const [isLoading, setIsLoading] = useState(true);
   const [products, setProducts] = useState([]);
   const [error, setError] = useState("");
   useEffect(() => {
      getProducts();
   }, [query]);

   const getProducts = async () => {
      let url = API_URL + "/products/";
      if (query) url += "category/" + query;
      try {
         const response = await fetch(url);
         const data = await response.json();
         setProducts(data);
         setIsLoading(false);
      } catch (e) {
         setError("Something went wrong, please try again later");
         setIsLoading(false);
      }
   }

   return { isLoading, products, error };
}

export default useProducts
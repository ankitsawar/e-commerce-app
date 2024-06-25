import { useEffect, useState } from 'react';
import { API_URL } from '../utils/Constants';

const useProduct = (id) => {

   const [product, setProduct] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
      getProduct();
   }, []);

   const getProduct = async () => {
      try {
         const response = await fetch(API_URL + "/products/" + id);
         const data = await response.json();
         setProduct(data);
         setIsLoading(false);
      } catch (e) {
         setError("Error Requesting Product");
         setIsLoading(false);
      }
   }

   return { isLoading, product, error };
}

export default useProduct
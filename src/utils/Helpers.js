import { categories } from "./Constants";

export const getCategoryBySlug = (slug) => {
   for (let category of categories) {
      if (category.slug === slug) {
         return category;
      }

   }
   return null;
}
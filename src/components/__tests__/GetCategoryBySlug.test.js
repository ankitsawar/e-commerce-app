import { getCategoryBySlug } from "../../utils/Helpers";

describe("GetCategoryBySlug", () => {

   test("Should return valid slug", () => {
      const slug = getCategoryBySlug("mens-clothing");
      expect(slug).toStrictEqual({ name: "Mens", query: "men's clothing", slug: "mens-clothing" });
   });

   test("Should return null for an invalid slug", () => {
      const slug = getCategoryBySlug("kids-clothing");
      expect(slug).toBeNull();
   });

});
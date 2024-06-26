import { getCategoryBySlug } from "../../utils/Helpers";

describe("GetCategoryBySlug", () => {

   it("Should return valid slug", () => {
      const slug = getCategoryBySlug("mens-clothing");
      expect(slug).toStrictEqual({ name: "Mens", query: "men's clothing", slug: "mens-clothing" });
   });

   it("Should return null for an invalid slug", () => {
      const slug = getCategoryBySlug("kids-clothing");
      expect(slug).toBeNull();
   });

});
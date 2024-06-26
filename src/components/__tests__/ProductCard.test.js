import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../utils/MockData.json";
import ProductCard from "../ProductCard";

it("should render a ProductCart Component", () => {
   render(
      <BrowserRouter>
         <ProductCard product={MOCK_DATA} />
      </BrowserRouter>
   );
   const title = screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
   expect(title).toBeInTheDocument();
});
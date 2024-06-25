import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "../common/Menu";
import { BrowserRouter } from "react-router-dom";
import { categories } from "../../utils/Constants";
import '@testing-library/jest-dom'


describe("Menu Component", () => {
   test("should renders menu componet", () => {

      render(<BrowserRouter>
         <Menu />
      </BrowserRouter>);

      categories.forEach(category => {
         expect(screen.getByText("Shop")).toBeInTheDocument()
         expect(screen.getByText(category.name)).toBeInTheDocument();
      })
   });

   test("should call menuClose when shop link is clicked", () => {
      const menuClose = jest.fn();
      render(<BrowserRouter>
         <Menu menuClose={menuClose} />
      </BrowserRouter>);
      fireEvent.click(screen.getByText("Shop"));
      expect(menuClose).toHaveBeenCalledWith(false);
   });
});

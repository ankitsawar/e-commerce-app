import { render, screen } from "@testing-library/react";
import Footer from "../common/Footer";
import { BrowserRouter } from "react-router-dom";

it("should load a footer component", () => {
   render(<BrowserRouter>
      <Footer />
   </BrowserRouter>
   );
   const heading = screen.getByText("Copyright © 2024 MyIndia");
   expect(heading);
})
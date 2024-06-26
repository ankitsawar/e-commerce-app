import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/Store";
import Header from "../common/Header";

describe("describe", () => {

   it("shoud render a header component", () => {
      render(
         <Provider store={store}>
            <BrowserRouter>
               <Header />
            </BrowserRouter>
         </Provider>
      );
      expect(screen.getByText("Logo")).toBeInTheDocument();

   });

   it("shoud open mobile menu on click of hamburger button ", () => {
      render(
         <Provider store={store}>
            <BrowserRouter>
               <Header />
            </BrowserRouter>
         </Provider>
      );
      const hamburgerBtn = screen.getByRole("button", { name: 'hamburger-btn' });
      fireEvent.click(hamburgerBtn);
      const closeBtn = screen.getByRole("button", { name: 'close-btn' });
      expect(closeBtn).toBeInTheDocument();

   });

   it("shoud close mobile menu on click of close button ", () => {
      render(
         <Provider store={store}>
            <BrowserRouter>
               <Header />
            </BrowserRouter>
         </Provider>
      );
      const closeBtn = screen.getByRole("button", { name: 'close-btn' });
      fireEvent.click(closeBtn);
      const hamburgerBtn = screen.getByRole("button", { name: 'hamburger-btn' });
      expect(hamburgerBtn).toBeInTheDocument();

   });

});

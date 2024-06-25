import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes";
import store from "./store/Store";

function App() {
   const appRouter = createBrowserRouter(routes);
   return <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
   </Provider>
}

export default App;

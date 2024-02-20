import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/Error";

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
]);

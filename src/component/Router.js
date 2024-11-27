import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Root from "./Root";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <PrivateRoute component={<Home />} />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

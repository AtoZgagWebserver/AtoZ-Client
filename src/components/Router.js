import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import Root from "./Root";
import Home from "../page/Home";
import Login from "../page/Login";
import Quiz from "../page/Quiz";
import Rank from "../page/Rank";
import Score from "../page/Score";
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
        path: "rank",
        element: <PrivateRoute component={<Rank />} />,
      },
      {
        path: "quiz",
        element: <PrivateRoute component={<Quiz />} />,
      },
      {
        path: "score",
        element: <PrivateRoute component={<Score />} />,
      },
    ],
  },
]);

export default router;

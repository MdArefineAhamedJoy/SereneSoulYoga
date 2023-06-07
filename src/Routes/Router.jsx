import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../LayOut/Main";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DeashBoard from "../LayOut/DeashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
  {
    path: "deashboard",
    element: <DeashBoard></DeashBoard>,
    children:[
      {
        
      }
    ]
  }
]);

export default router
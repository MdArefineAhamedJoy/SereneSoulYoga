import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../LayOut/Main";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DeashBoard from "../LayOut/DeashBoard";
import AddClasses from "../Page/DeshBord/Instructor/AddClasses";
import MyClasses from "../Page/DeshBord/MyClasses";

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
    path: "deashBoard",
    element: <DeashBoard></DeashBoard>,
    children:[
      {
        path: '/deashBoard/addClasses',
        element: <AddClasses></AddClasses>
      },
      {
        path: '/deashBoard/myClasses',
        element: <MyClasses></MyClasses>
      }
    ]
  }
]);

export default router
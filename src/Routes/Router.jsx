import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../LayOut/Main";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DeashBoard from "../LayOut/DeashBoard";
import AddClasses from "../Page/DeshBord/Instructor/AddClasses";
import MyClasses from "../Page/DeshBord/MyClasses";
import AllClasses from "../Page/DeshBord/Admin/AllClasses";
import ManageUsers from "../Page/DeshBord/Admin/ManageUsers";
import Classes from "../Page/Home/Classes/Classes";

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
      {
        path: "classes",
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: "deashBoard",
    element: <DeashBoard></DeashBoard>,
    children:[
      // instructor section 
      {
        path: '/deashBoard/addClasses',
        element: <AddClasses></AddClasses>
      },
      {
        path: '/deashBoard/myClasses',
        element: <MyClasses></MyClasses>
      },
      // admin section 
      {
        path: '/deashBoard',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/deashBoard/manageUser',
        element: <ManageUsers></ManageUsers>
      }
    ]
  }
]);

export default router
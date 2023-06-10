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
import Instructor from "../Page/Home/Instructor/Instructor";
import SelectedClass from "../Page/DeshBord/Students/SelectedClass";
import EnrollClass from "../Page/DeshBord/Students/EnrollClass";
import Payment from "../Page/DeshBord/Students/Payment";

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
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>
      }
    ]
  },
  {
    path: "deashBoard",
    element: <DeashBoard></DeashBoard>,
    children:[
      // instructor section 
      {
        path: '/deashBoard/addClass',
        element: <AddClasses></AddClasses>
      },
      {
        path: '/deashBoard/myClasses',
        element: <MyClasses></MyClasses>
      },
      // admin section 
      {
        path: '/deashBoard/allClass',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/deashBoard/manageUser',
        element: <ManageUsers></ManageUsers>
      }
      // student section 
      ,
      {
        path: '/deashBoard/selected',
        element:<SelectedClass></SelectedClass>
      }
      ,
      {
        path: '/deashBoard/enroll',
        element:<EnrollClass></EnrollClass>
      },
      {
        path: '/deashBoard/payment/:id',
        loader: ({params}) =>fetch(`http://localhost:5000/allClasses/selected/${params.id}`) ,
        element:<Payment></Payment>
      }
    ]
  }
]);

export default router


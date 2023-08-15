import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../LayOut/Main";
import Login from "../Components/Login";
import Register from "../Components/Register";
import DeashBoard from "../LayOut/DeashBoard";
import AddClasses from "../Page/DeshBord/Instructor/AddClasses";
import AllClasses from "../Page/DeshBord/Admin/AllClasses";
import ManageUsers from "../Page/DeshBord/Admin/ManageUsers";
import Classes from "../Page/Home/Classes/Classes";
import Instructor from "../Page/Home/Instructor/Instructor";
import SelectedClass from "../Page/DeshBord/Students/SelectedClass";
import EnrollClass from "../Page/DeshBord/Students/EnrollClass";
import Payment from "../Page/DeshBord/Students/Payment/Payment";
import MyClasses from "./../Page/DeshBord/Instructor/MyClasses";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../Page/DeshBord/Students/PaymentHistory";
import ErrorPage from "../Components/ErrorPage";
import Services from "../Page/Home/Home/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "services",
        element: <Services></Services>
      },
    ],
  },
  {
    path: "/deashBoard",
    element: (
      <PrivateRoute>
        <DeashBoard></DeashBoard>
      </PrivateRoute>
    ),
    children: [
      // instructor section
      {
        path: "/deashBoard/addClass",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "/deashBoard/myClasses",
        element: <MyClasses></MyClasses>,
      },
      // admin section
      {
        path: "/deashBoard/allClass",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/deashBoard/manageUser",
        element: <ManageUsers></ManageUsers>,
      },
      // student section
      {
        path: "/deashBoard/selected",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "/deashBoard/enroll",
        element: <EnrollClass></EnrollClass>,
      },
      {
        path: "/deashBoard/payment/:id",
        loader: ({ params }) =>
          fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/all/selected/class/${params.id}`),
        element: <Payment></Payment>,
      },
      {
        path: "/deashBoard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

export default router;

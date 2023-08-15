import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Admin from "../Page/DeshBord/DeashBoardHome/Admin";
import InstructorHome from "../Page/DeshBord/DeashBoardHome/InstructorHome";
import StudentHome from "../Page/DeshBord/DeashBoardHome/StudentHome";
import { FaHome } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import NavBar from "../Page/Home/Home/Share/NavBar/NavBar";

const DeashBoard = () => {
  const { user } = useContext(AuthContext);
  const [userRoll, setUserRoll] = useState("");
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetch("https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const findUser = data?.find((rolls) => rolls?.email === user?.email);
        const userStatus = findUser?.role;
        console.log(userStatus);
        setUserRoll(userStatus);
      });
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedUserRoll = "admin";
      setUserRoll(fetchedUserRoll);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <span className="loading loading-bars  loading-lg"></span>;
  }

  const dashboardHome = location.pathname.endsWith("/deashBoard");

  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden "
          >
            <AiOutlineMenu />
          </label>
          {dashboardHome && (
            <>
              {userRoll === "admin" ? (
                <Admin />
              ) : userRoll === "instructor" ? (
                <InstructorHome />
              ) : (
                <StudentHome></StudentHome>
              )}
            </>
          )}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 h-full bg-gradient-to-b from-sky-400 to-sky-900 text-white ">
            {/* Sidebar content here */}
            <div className="w-full flex flex-col justify-center mb-5 pt-8">
              <img
                className="w-14 h-14 mx-auto rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <p className="mx-auto py-2">{user?.displayName}</p>
              <p className="pb-2 mx-auto">{userRoll}</p>
            </div>
            <li className="text-lg font-semibold  flex">
              <Link to="/">Home</Link>
            </li>
            {userRoll === "admin" ? (
              <>
                <li className="text-lg font-semibold ">
                  <Link to="/deashBoard/allClass">All Classes</Link>
                </li>
                <li className="text-lg font-semibold ">
                  <Link to="/deashBoard/manageUser">Manage userRoll</Link>
                </li>
              </>
            ) : userRoll === "instructor" ? (
              <>
                <li className="text-lg font-semibold ">
                  <Link to="/deashBoard/addClass">Add a Classes</Link>
                </li>
                <li className="text-lg font-semibold ">
                  <Link to="/deashBoard/myClasses">My Classes</Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-lg font-semibold ">
                  <Link to="/deashBoard/selected">My Selected Classes</Link>
                </li>
                <li className="text-lg font-semibold ">
                  <Link to="/deashBoard/enroll">My Enrolled Classes</Link>
                </li>
                <li className="text-lg font-semibold ">
                  <Link to="/deashBoard/paymentHistory">Payment History</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeashBoard;

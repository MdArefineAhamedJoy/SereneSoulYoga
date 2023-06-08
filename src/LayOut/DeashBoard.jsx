import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const DeashBoard = () => {
  const { user } = useContext(AuthContext);
  const [userRoll, setUserRoll] = useState("");
  // const userRoll = "admin";

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const findUser = data?.find((rolls) => rolls?.email === user?.email);
        const userStatus = findUser?.role;
        setUserRoll(userStatus);
      });
  }, [userRoll , user]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="w-full flex flex-col justify-center mb-5 ">
            <img
              className="w-14 h-14 mx-auto rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <p className="mx-auto py-4">{user?.displayName}</p>
          </div>
          {userRoll === "admin" ? (
            <>
              {" "}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/deashBoard">All Classes</Link>
              </li>
              <li>
                <Link to="/deashBoard/manageUser">Manage userRoll</Link>
              </li>
            </>
          ) : userRoll === "instructor" ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/deashBoard/addClasses">Add a Classes</Link>
              </li>
              <li>
                <Link to="/deashBoard/myClasses">My Classes</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>My Selected Classes</Link>
              </li>
              <li>
                <Link>My Enrolled Classes</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DeashBoard;

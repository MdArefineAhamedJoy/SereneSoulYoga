import React from "react";
import { Link, Outlet } from "react-router-dom";

const DeashBoard = () => {
  const users = "";
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
          <div className="w-full flex justify-center mb-10 bg-red-400">
            <p className="mx-auto">this is person</p>
          </div>
          {users === "admin" ? (
            <>
              {" "}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>Admin Classes</Link>
              </li>
              <li>
                <Link>Admin Classes</Link>
              </li>
            </>
          ) : users === "instructor" ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>Instructor Classes</Link>
              </li>
              <li>
                <Link>Instructor Classes</Link>
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

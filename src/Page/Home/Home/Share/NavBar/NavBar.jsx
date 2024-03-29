import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "./../../../../../Provider/AuthProvider";
import logo from "../../../../../assets/logo.png";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const location = useLocation()
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const dashboardLocation = location.pathname.includes('/deashBoard')


  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("valentine");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {});
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };

  const navItem = (
    <>
      <li>
        {" "}
        <Link to="/" className="md:py-2 py-4 px-4 decoration-sky-800 ">
          Home
        </Link>
      </li>
      <li>

        <Link to="classes" className=" md:py-2 py-4 px-4 decoration-sky-800">
     
          Classes
        </Link>
      </li>
      <li>
        {" "}
        <Link to="instructor" className="md:py-2 py-4 px-4  ">
          {" "}
          Instructor
        </Link>
      </li>
      <li>
        {" "}
        <Link to="services" className="md:py-2 py-4 px-4  ">
          {" "}
          Your Services 
        </Link>
      </li>
      {user ? (
        <>
          <li>
            {" "}
            <Link to="/deashBoard" className="md:py-2 py-4 px-4 decoration-sky-800  ">
              Dashboard
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              onClick={handelLogOut}
              className="md:py-2 py-4 px-4 decoration-sky-800 "
            >
              Log Out
            </Link>{" "}
          </li>
        </>
      ) : (
        <>
          <li>
            {" "}
            <Link to="/login" className="md:py-2 py-4 px-4 decoration-sky-800 ">
              Login
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/register" className="md:py-2 py-4 px-4 decoration-sky-800 ">
              Register
            </Link>{" "}
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className={`  bg-[#227179] navbar text-white `}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm uppercase dropdown-content font-semibold mt-1 ms-[-10px] rounded-none w-screen h-screen z-50  bg-[#227179] "
            >
              {navItem}
            </ul>
          </div>
          <div className="flex flex-col">
            <img
              className={`w-14 h-14 rounded-full mx-auto md:block hidden`}
              src={logo}
              alt=""
            />
            <Link className="text-white font-bold">
              SereneSoulYoga
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden font-semibold uppercase lg:flex">
          <ul className="menu menu-horizontal px-1">
          {  !dashboardLocation && navItem}
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate px-4">
            <input onChange={handleToggle} type="checkbox" />
            <svg
              className="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {
           !dashboardLocation && user?.email && (
              <img
                className="w-12 h-12 rounded-full md:block hidden"
                src={user?.photoURL}
                alt=""
              />
            ) 
          }
          <img className="w-14 h-14 rounded-md md:hidden " src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { AuthContext } from './../../../../../Provider/AuthProvider';
const NavBar = () => {
  const {user , logOut} = useContext(AuthContext)
  const [open, setOpen] = useState(false);


  const handelLogOut = () =>{
    logOut()
    .then(()=>{})
    .then(error =>{})
  }

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };

  return (
    <div>
      <div className="w-full  bg-[#7e8446]  ">
        <nav
          className={`md:flex justify-center items-center py-8 p-2 md:px-5  `}
        >
          <h1 className=" ">SereneSoulYoga</h1>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-3 top-4 cursor-pointer md:hidden"
          >
            {open ? <FaWindowClose></FaWindowClose> : <FaBars></FaBars>}
          </div>
          <div
            className={`absolute md:static md:bg-red-none pb-5 md:pb-0   ps-3 md:ps-0 md:z-auto  z-[1] left-0 w-screen md:w-auto transition-all duration-300 ease-in ${
              open
                ? "top-16 right-0 opacity-100"
                : "top-[-200px] md:opacity-100 opacity-0"
            } `}
          >
            <ul className="ms-auto md:flex ">
              <li > <Link className="py-2 px-4 hover:bg-red-500">Home</Link></li>
              {user ? (
                <>
                  <li> <Link to='/deashBoard' className="py-2 px-4 hover:bg-red-500">Dashboard</Link> </li> 
                  <li> <Link className="py-2 px-4 hover:bg-red-500">Profile Picture</Link> </li>
                  <li> <Link onClick={handelLogOut} className="py-2 px-4 hover:bg-red-500">Log Out</Link> </li>
                </>
              ) : (
                <>
                  <li> <Link to='/login' className="py-2 px-4 hover:bg-red-500">Login</Link> </li> 
                  <li> <Link to='/register' className="py-2 px-4 hover:bg-red-500">Register</Link> </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

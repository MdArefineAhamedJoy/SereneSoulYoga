import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { AuthContext } from './../../../../../Provider/AuthProvider';
import logo from '../../../../../assets/logo.png'
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

  const navItem = (
    <>
      <li>
        {" "}
        <Link to="/" className="py-2 px-4 hover:bg-red-500">
          Home
        </Link>
      </li>
      <li>
        {" "}
        <Link to="classes" className="py-2 px-4 hover:bg-red-500">
          {" "}
          Classes
        </Link>
      </li>
      <li>
        {" "}
        <Link to="instructor" className="py-2 px-4 hover:bg-red-500">
          {" "}
          Instructor
        </Link>
      </li>
      {user ? (
        <>
          <li>
            {" "}
            <Link to="/deashBoard" className="py-2 px-4 hover:bg-red-500">
              Dashboard
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="py-2 px-4 hover:bg-red-500">
              Profile Picture
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link onClick={handelLogOut} className="py-2 px-4 hover:bg-red-500">
              Log Out
            </Link>{" "}
          </li>
        </>
      ) : (
        <>
          <li>
            {" "}
            <Link to="/login" className="py-2 px-4 hover:bg-red-500">
              Login
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/register" className="py-2 px-4 hover:bg-red-500">
              Register
            </Link>{" "}
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#7e8446] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-6 rounded-none w-60 z-50  bg-base-100 "
            >
              {navItem}
            </ul>
          </div>
          <img className="w-20 h-20 rounded-md  md:block hidden" src={logo} alt="" />
          <Link className="md:text-3xl text-xl text-white font-bold">SereneSoulYoga</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <img className="w-16 h-16 rounded-full md:block hidden" src={user?.photoURL} alt="" />
          <img className="w-20 h-20 rounded-md  md:hidden " src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;




// <div>
//       <div className="w-full    ">
//         <nav
//           className={`md:flex justify-center items-center py-8 p-2 md:px-5  `}
//         >
//           <h1 className=" ">SereneSoulYoga</h1>
//           <div
//             onClick={() => setOpen(!open)}
//             className="text-3xl absolute right-3 top-4 cursor-pointer md:hidden"
//           >
//             {open ? <FaWindowClose></FaWindowClose> : <FaBars></FaBars>}
//           </div>
//           <div
//             className={`absolute md:static md:bg-red-none pb-5 md:pb-0   ps-3 md:ps-0 md:z-auto  z-[1] left-0 w-screen md:w-auto transition-all duration-300 ease-in ${
//               open
//                 ? "top-16 right-0 opacity-100"
//                 : "top-[-200px] md:opacity-100 opacity-0"
//             } `}
//           >
//             <ul className="ms-auto md:flex ">
//               <li > <Link to='/' className="py-2 px-4 hover:bg-red-500">Home</Link></li>
//               <li > <Link to='classes' className="py-2 px-4 hover:bg-red-500"> Classes</Link></li>
//               <li > <Link to='instructor' className="py-2 px-4 hover:bg-red-500"> Instructor</Link></li>
//               {user ? (
//                 <>
//                   <li> <Link to='/deashBoard' className="py-2 px-4 hover:bg-red-500">Dashboard</Link> </li> 
//                   <li> <Link className="py-2 px-4 hover:bg-red-500">Profile Picture</Link> </li>
//                   <li> <Link onClick={handelLogOut} className="py-2 px-4 hover:bg-red-500">Log Out</Link> </li>
//                 </>
//               ) : (
//                 <>
//                   <li> <Link to='/login' className="py-2 px-4 hover:bg-red-500">Login</Link> </li> 
//                   <li> <Link to='/register' className="py-2 px-4 hover:bg-red-500">Register</Link> </li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
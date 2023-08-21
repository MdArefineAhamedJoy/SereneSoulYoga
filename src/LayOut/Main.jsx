import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Page/Home/Home/Share/NavBar/NavBar";
import Footer from "../Page/Home/Footer/Footer";






const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

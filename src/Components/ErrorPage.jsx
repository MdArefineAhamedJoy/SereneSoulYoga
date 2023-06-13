import React from "react";
import errorImage from "../../src/assets/glitch-error-404-page-background_23-2148090410.avif";
import { Link } from "react-router-dom";

const ErrorPage = ({ status, error }) => {
  return (
    <div className="flex flex-col relative">
      <img className="w-screen  h-screen" src={errorImage} alt="" />
      <div className="md:p-10">
       <Link to='/'>
       <button  className="absolute bg-red-500 px-10 py-4 font-bold text-white rounded hover:bg-red-600 top-20 right-1/2">Back To Home</button>
       </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

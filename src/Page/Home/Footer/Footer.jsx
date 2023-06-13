import React from "react";
import logo from '../../../assets/logo.png'
import { FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="md:flex text-base-content w-full bg-red-300">
        <div className="  md:w-[30%]  md:pt-20 w-full p-5 md:text-right flex flex-col bg-[#d4ad76] h-96">
          <div className=" flex flex-col gap-2">
            <span className="font-extrabold border-b py-2 border-black pb-2 font-3xl">
              WORK HOURS
            </span>
            <div className="border-b py-2 border-black">
              <p>Monday - Thursday</p>
              <p className="font-bold =">0600 - 1800 hrs</p>
            </div>
            <div className="border-b py-2 border-black">
              <p>Friday & Saturday</p>
              <p className="font-bold =">0600 - 0900 hrs</p>
            </div>
            <div className="border-b py-2 border-black">
              <p>And all the Sundays</p>
              <p className="font-bold text-xl">Will be Holidays</p>
            </div>
          </div>
        </div>
        <div className="  md:w-[40%] w-full md:pt-16   mx-auto p-5 bg-[#c9a470]">
          <img className="w-20 h-20 mx-auto pb-5" src={logo} alt="" />
          <p>
            We at SereneSoulYoga provide various services to the nature of the clients.
            Wish how you would like to spend the time here we can talk and come
            to a conclusion. Phasellus et nisl tellus. Etiam facilisis eu nisi
            scelerisque faucibus. Proin semper suscipit magna, nec imperdiet
            lacus semper vitae. Sed hendrerit enim non justo posuere placerat
            eget purus mauris. Etiam facilisis eu nisi scelerisque faucibus.
            Proin semper suscipit magna, nec imperdiet lacus semper.
          </p>
        </div>
        <div className="md:w-[30%] text-left w-full md:pt-20 p-5   flex flex-col bg-[#d4ad76] h-96 ">
          <span className="font-bold  text-left text-lg mb-2 pb-2 border-b border-black">CONTACT US</span>
          <div className="py-2">
            <p  className="flex gap-2 items-center"><FaPhoneAlt></FaPhoneAlt> Toll Free: 1224 2234 </p>
            <p> Fax: 1224 2235 225 </p>
          </div>
          <div className="py-2">
            <p className="flex gap-2 items-center"><MdEmail className="FaEmail" /> support@livecon.com </p>
            <p> admin@livecon.com  </p>
          </div>
          <div  className="py-2">
            <p className="flex gap-2 items-center"> <FaSearchLocation></FaSearchLocation> 625 @ David Blake Road, </p>
            <p> Adventureland, LA 14536, USA </p>
          </div>
        </div>
      </div>
      <div  className="w-full h-24 bg-[#55452f]   flex md:justify-center items-center">
        <p className="txt-center text-white">SereneSoulYoga © 2023. Made by DesignThemes copy right 2050.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../../../assets/logo.png";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="md:mt-20 bg-neutral-900  text-white mt-20">
      <div>
        <section className="grid md:grid-cols-3 md:p-5 p-3 md:py-24 py-10">
          <div className=" md:px-3 px-0">
            <img className="w-12 h-8 inline-block " src={logo} alt="" />
            <span className="text-2xl font-semibold text-white ">
              SereneSoulYoga
            </span>
            <p className="pt-8">
              We at provide various services to the nature of the clients. Wish
              how you would like to spend the time here we can talk and come to
              a conclusion. Phasellus et nisl tellus. Etiam facilisis eu nisi
              scelerisque faucibus.
            </p>
          </div>
          <div className="md:px-9 px-0 pt-5 md:pt-0 ">
            <h3 className="text-2xl font-semibold text-white ">Quick Links</h3>
            <div className=" md:pt-9 pt-3 flex justify-between gap-2">
              <div>
                <Link className="block text-[#3f9ea9] hover:text-white duration-200">
                  Pricing{" "}
                </Link>
                <Link className="block py-2 text-[#3f9ea9] hover:text-white duration-200">
                  Courses
                </Link>
                <Link className="block py-2 text-[#3f9ea9] hover:text-white duration-200">
                  FAQ
                </Link>
                <Link className="block py-2 text-[#3f9ea9] hover:text-white duration-200">
                  Terms of Service
                </Link>
              </div>
              <div>
                <Link className="block text-[#3f9ea9] hover:text-white duration-200">
                  Become Instructor
                </Link>
                <Link className="block py-2 text-[#3f9ea9] hover:text-white duration-200">
                  Support Center
                </Link>
                <Link className="block py-2 text-[#3f9ea9] hover:text-white duration-200">
                  Privacy Policy
                </Link>
                <Link className="block py-2 text-[#3f9ea9] hover:text-white duration-200">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="md:ps-10 ">
            <h3 className=" md:pb-8 pb-3 text-2xl md:pt-0 pt-3  font-semibold text-white capitalize">Contact Info</h3>
            <div className="py-2">
              <p className="flex gap-2 items-center">
                <FaSearchLocation></FaSearchLocation> Kishorganje Sodoar
              </p>
              <p className="ps-6">Dhaka Bangaladesh</p>
            </div>
            <div className="py-2">
              <p className="flex gap-2 items-center">
                <MdEmail className="FaEmail" /> support@livecon.com{" "}
              </p>
              <p className="flex gap-2 items-center">
                <FaPhoneAlt></FaPhoneAlt> Toll Free: 1224 2234{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="w-full justify-between md:h-20 h-full md:p-8 p-3 bg-black  md:flex  items-center">
          <p className="txt-center text-white ">
            SereneSoulYoga © 2023. Made by DesignThemes copy right 2050.
          </p>
          <div className="flex gap-5 md:pt-0 pt-5" >
            <Link to={'https://github.com/MdArefineAhamedJoy/SereneSoulYoga'}><FaGithub className="w-5 h-5 rounded text-[#227179]"  /></Link>
            <Link><FaLinkedin className="w-5 h-5 rounded text-[#227179]"/></Link>
            <Link><FaEnvelope className="w-5 h-5 rounded text-[#227179]"/></Link>
            <Link><FaDiscord className="w-5 h-5 rounded text-[#227179]"/></Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

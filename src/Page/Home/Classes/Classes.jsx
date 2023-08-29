import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../../Components/PageTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import ClassesBanner from "./ClassesBanner";
import { AiOutlineArrowRight } from "react-icons/ai";

const Classes = () => {
  const [allUser] = useUsers();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const navigator = useNavigate();
  const [userRoll, setUserRoll] = useState("student");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const findUser = allUser?.find((rolls) => rolls?.email === user?.email);
    const userStatus = findUser?.role;
    setUserRoll(userStatus);
  }, [allUser, user]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedUserRoll =
        userRoll === "admin"
          ? "admin"
          : userRoll === "instructor"
          ? "instructor"
          : "student";
      setUserRoll(fetchedUserRoll);
      setLoading(false);
    }, 2000);
  }, []);

  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(
        `https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/approveClass/?status=approved`
      ).then((res) => res.json()),
  });

  const handleSelectedClass = (classes) => {
    if (!user?.email) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Please Login First",
        showConfirmButton: false,
        timer: 1500,
      });
      return navigator("/login");
    }
    const classId = classes._id;
    delete classes._id;
    const userEmail = user?.email;
    fetch(
      `https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/allClasses/select`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...classes, classId, userEmail }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Confirm Select This Class",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div className="">
      <ClassesBanner></ClassesBanner>
      <div className="my-20 text-center">
        <PageTitle
          title={"Your  SereneSoul Yoga Class "}
          subTitle={`Welcome to Serene Soul Yoga, where tranquility and vitality converge. Our classes offer more than just physical postures, our skilled instructors guide you through a harmonious blend of poses, fostering strength, flexibility, and inner peace.`}
        ></PageTitle>
        <Link className="flex justify-center" to={"/deashBoard/selected"}>
          <button className="  flex items-center gap-1 bg-[#227179] text-white py-2 px-7 rounded-full md:top-[17%] top-[8%] left-5 z-10 ">
            See Your Selected Class
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 px-4 gap-7 md:w-11/12 w-full mx-auto">
        {data?.map((classes) => (
          <div
            key={classes?._id}
            className={`shadow-md rounded ${
              parseInt(classes.availableSite) === 0 ? "bg-red-500" : ""
            } hover:shadow-lg group hover:bg-gray-100 hover:scale-105 transition duration-300`}
          >
            <figure>
              <img
                className="w-full h-44"
                src={classes?.photoUrl}
                alt="Movie"
              />
            </figure>
            <div className="p-2">
              <h2 className="text-[#227179] text-xl font-semibold">
                {classes?.className}
              </h2>
              <p className="uppercase">{classes?.name}</p>
              <div className="flex justify-between">
                <p className="uppercase">Site: {classes?.availableSite}</p>
                <p className="uppercase">
                  Price: <span className="font-bold">${classes?.price}</span>
                </p>
              </div>
              <div>
                <button
                  disabled={userRoll === "instructor" || userRoll === "admin"}
                  onClick={() => handleSelectedClass(classes)}
                  className="relative text-center   overflow-hidden  bg-[#227179] px-7 font-semibold hover:bg-[#153f44] duration-300  py-2 my-2 uppercase text-sm text-white rounded-ss-xl rounded-ee-xl"
                >
                  selected
                  <span class="absolute inset-x-0 bottom-0 h-1 bg-[#d31c3e] transform transition-transform duration-500 translate-x-[-110%] group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;

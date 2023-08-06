import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers";
import { useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../../Components/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { AiOutlineSearch } from "react-icons/ai";
import { Autoplay, Navigation, Pagination } from "swiper";
import { AuthContext } from "../../../Provider/AuthProvider";
import ClassesBanner from "./ClassesBanner";






const Classes = () => {
  const [allUser] = useUsers();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const navigator = useNavigate();
  const [userRoll, setUserRoll] = useState("student");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findUser = allUser?.find((rolls) => rolls?.email === user?.email);
    const userStatus = findUser?.role;
    setUserRoll(userStatus);
  }, [allUser, user]);

  console.log(userRoll);
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
    <div>
      <ClassesBanner></ClassesBanner>
      <div className="my-20 text-center">
        <h1 className="font-semibold mb-3 text-2xl "> Yoga Classes</h1>
        <div className="font-bold w-8/12 mx-auto relative">
          <input
            className="w-full text-lg capitalize font-semibold rounded-md border mt-5 focus:outline-blue-500 focus:outline-2 text-black   p-3 bg-gray-300"
            type="text"
            placeholder="Search Yoga Classes "
          />
          <div className="absolute top-9 right-3">
            <AiOutlineSearch className="text-2xl"></AiOutlineSearch>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 px-4 gap-5">
        {data?.map((classes) => (
          <div
            key={classes?._id}
            className={`card bg-base-100 shadow-xl ${
              parseInt(classes.availableSite) === 0 ? "bg-red-500" : ""
            }`}
          >
            <figure>
              <img
                className="w-full h-64"
                src={classes?.photoUrl}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name : {classes?.className}</h2>
              <p>Instructor Name : {classes?.name}</p>
              <p>Available Site : Site {classes?.availableSite}</p>
              <p>Price : ${classes?.price}</p>
              <div className="card-actions justify-center">
                <button
                  disabled={userRoll === "instructor" || userRoll === "admin"}
                  onClick={() => handleSelectedClass(classes)}
                  className="btn"
                >
                  selected
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

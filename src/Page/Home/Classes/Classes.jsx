import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers";
import { useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../../Components/PageTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import ClassesBanner from "./ClassesBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


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
      </div>

      <Tabs  className=" md:w-11/12 px-4 w-full mt-[-70px] mx-auto text-center">
        <TabList className="flex pb-20 w-full gap-3 mx-auto">
          <Tab className="w-3/12 bg-[#35575b] text-white focus:outline-pink-500 py-4 font-semibold uppercase rounded-md">Hatha Yoga</Tab>
          <Tab className="w-3/12 bg-[#35575b] text-white focus:outline-pink-500 py-4 font-semibold uppercase rounded-md">Vinyasa Yoga</Tab>
          <Tab className="w-3/12 bg-[#35575b] text-white focus:outline-pink-500 py-4 font-semibold uppercase rounded-md">Kundalini Yoga</Tab>
          <Tab className="w-3/12 bg-[#35575b]  text-white focus:outline-4 focus:outline-pink-500 py-4 font-semibold uppercase rounded-md">Your Free Class  </Tab>
        </TabList>
{/* 
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel> */}
      </Tabs>

      <div className="grid grid-cols-3 px-4 gap-7 md:w-11/12 w-full mx-auto">
        {data?.map((classes) => (
          <div
            key={classes?._id}
            className={`shadow-md rounded ${
              parseInt(classes.availableSite) === 0 ? "bg-red-500" : ""
            } hover:shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300`}
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
                  className="bg-[#227179] px-7 font-semibold hover:bg-[#153f44] duration-300  py-2 my-2 uppercase text-sm text-white rounded-ss-xl rounded-ee-xl"
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

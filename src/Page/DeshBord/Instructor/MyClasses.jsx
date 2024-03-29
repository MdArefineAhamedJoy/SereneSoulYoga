import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/instructor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [classes]);

  const totalEnrollStudent = classes.reduce(
    (total, current) => parseInt(total) + parseInt(current.enroll),
    0
  );

  return (
    <div className="w-full h-full gap-4"> 
      <h1 className="text-center my-10 font-semibold text-2xl text-[#227179]">
        Total Enroll Student : {totalEnrollStudent}
      </h1>
      {classes.map((classData) => (
        <div
          key={classData._id}
          className="card my-5 mx-5  lg:card-side bg-base-100 "
        >
          <div className="card-body md:w-6/12 ">
            <h2 className="card-title">Class Name : {classData.className}</h2>
            <p>
              <span>Instructor Name :</span> {classData.name}{" "}
            </p>
            <p>
              <span>Instructor Email :</span> {classData.email}{" "}
            </p>
            <p>
              <span>Class Price :</span> {classData.price}{" "}
            </p>
            <p>
              <span>Class Status :</span> {classData.status}
            </p>
            <p>
              <span>Available Sites :</span> {classData.availableSite}{" "}
            </p>
            <p>
              <span>Total Enroll:</span> {classData.enroll}{" "}
            </p>

            <div className="card-actions mx-auto">
              <button className="btn  bg-[#227179] hover:bg-[#19555c] duration-300 text-white"> Update</button>
              <button
                onClick={() => window.my_modal_1.showModal()}
                disabled={
                  classData.status === "pending" ||
                  classData.status === "approved"
                }
                className="btn badge"
              >
                open admin feedback
              </button>
              <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg text-center">
                    Admin Feedback
                  </h3>
                  <p className="py-4">{classData?.feedback}</p>
                  <div className="modal-action">
                    <button className="btn  bg-[#227179] hover:bg-[#19555c] duration-300 text-white">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
          <figure className="h-96 w-6/12">
            <img className="h-full" src={classData.photoUrl} alt="Album" />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;

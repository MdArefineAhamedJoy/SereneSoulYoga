import React, { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import useUsers from "../../../Hooks/useUsers";

const ManageUsers = () => {
  const [userRoll, setUserRoll] = useState("Student");
  const [allUser, refetch] = useUsers();

  const handelMakeRoll = (user, roll) => {
    fetch(
      `https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/users/roll/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: `${roll}` }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div className=" w-full h-full">
      <div className="text-center pb-7 font-semibold ">
        <h1 className="py-4 text-center font-semibold text-2xl text-[#227179] ">
          All User Manage Panel{" "}
        </h1>
        <p className="w-60 mx-auto bg-[#227179]  rounded-ee-3xl rounded-ss-3xl px-10 text-white ">
         Available Users {allUser?.length}
        </p>
      </div>
      <div className="pt-5">
        <table className="table">
          <thead className=" text-[#227179] border-y-2 border-[#227179] ">
            <tr className="font-bold text-[16px] text-center  ">
              <th className="  ">Photo</th>
              <th className="bg-[#227179] text-white ">User Info </th>
              <th > Roll </th>
              <th className="bg-[#227179] text-white  ">Set Roll</th>
            </tr>
          </thead>
          {allUser?.map((user, index) => (
            <tbody className="text-center text-lg text-[#2c5c64]" key={user._id}>
              <tr className="border-b-2 border-b-[#2c5c64]">
                <th>
                  <img
                    className="w-14 h-14 mx-auto rounded-full"
                    src={user.image}
                    alt=""
                  />
                </th>
                <td>
                  {user?.name}
                  <br />
                  {user.email}
                </td>
                <td>{user.role ? user.role : "student"}</td>
                <td>
                  <button
                    onClick={() => handelMakeRoll(user, "admin")}
                    className="btn btn-outline btn-secondary mx-5"
                  >
                    <GrUserAdmin className=""></GrUserAdmin>
                    Admin
                  </button>

                  <button
                    onClick={() => handelMakeRoll(user, "instructor")}
                    className="btn btn-outline btn-accent "
                  >
                    <FaUserAlt></FaUserAlt>
                    Instructor
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

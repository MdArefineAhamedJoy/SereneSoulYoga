import React, { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import useUsers from "../../../Hooks/useUsers";

const ManageUsers = () => {
  const [userRoll, setUserRoll] = useState("Student");
  const [allUser] = useUsers();

  const handelMakeRoll = (user, roll) => {
    fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/users/roll/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: `${roll}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div className=" w-full">
      <h1 className="py-10 text-center font-semibold text-2xl">Available User {allUser?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#c9a470]">
            <tr className="text-center font-bold text-xl border-b-4">
              <th>Photo</th>
              <th>User Info </th>
              <th> Roll </th>
              <th>Set Roll</th>
            </tr>
          </thead>
          {allUser?.map((user, index) => (
            <tbody className="text-center text-lg" key={user._id}>
              <tr className="border-b-4">
                <th>
                  <img
                    className="w-20 h-20 mx-auto rounded-full"
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

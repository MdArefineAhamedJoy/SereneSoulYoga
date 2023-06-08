import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GrUserAdmin } from 'react-icons/gr';
import { FaUserAlt } from "react-icons/fa";


const ManageUsers = () => {

  const [userRoll , setUserRoll] = useState('Student')

  const { isLoading, error, data , refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });

  const handelMakeRoll = (user, roll) => {
    fetch(`http://localhost:5000/users/roll/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: `${roll}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch()
      });
  };

  return (
    <div className=" w-full">
      <h1 className="py-10 text-center">Available User {data?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-center font-bold text-xl border-b-4">
              <th>#</th>
              <th>User Info </th>
              <th> Roll </th>
              <th>Set Roll 
              </th>
            </tr>
          </thead>
          {data?.map((user, index) => (
            <tbody className="text-center text-lg" key={user._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  {user?.name}
                  <br />
                  {user.email}
                </td>
                <td>{user.role}</td>
                <td >
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

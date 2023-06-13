import React from "react";
import { useQuery } from "@tanstack/react-query";
import Feedback from './../../../Components/Feedback';

const AllClasses = () => {
  const { data, isLoading, error, refetch } = useQuery([], () =>
    fetch("http://localhost:5000/allClasses").then((response) =>
      response.json()
    )
  );


  const handelApproved = (id, allClass, button ) => {
    const status = allClass.status;
    if(button === 'approved'){
      fetch(`http://localhost:5000/allClasses/status/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "approved" }),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
        });
    }
    fetch(`http://localhost:5000/allClasses/status/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "deny" }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div className="w-full">
      <h1 className="text-center pb-10 font-bold text-3xl">
        This is all user Section
      </h1>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-xl border-b-4 text-center">
              <th>#</th>
              <th>Image & Name</th>
              <th>Instructor Info </th>
              <th>Product Details</th>
              <th>Only Admin</th>
            </tr>
          </thead>
          {data?.map((allInfo, index) => (
            <tbody className=" text-center" key={allInfo._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="rounded w-32 mx-auto h-20">
                    <img
                      className="w-full h-full"
                      src={allInfo.photoUrl}
                      alt="title_image"
                    />
                  </div>
                </td>
                <td>
                  <p>{allInfo.name}</p>
                  <span className="badge badge-ghost badge-sm">
                    {allInfo.email}
                  </span>
                </td>
                <td>
                  <p>Price : {allInfo.price}</p>
                  <p>Status : {allInfo.status}</p>
                  <p>Site : {allInfo.availableSite}</p>
                  <p>Name : {allInfo.className}</p>
                </td>
                <th>
                  <button
                    disabled={allInfo.status === "approved" || allInfo.status === "deny" }
                    onClick={() => handelApproved(allInfo._id, allInfo , "approved")}
                    className="btn btn-ghost btn-sm"
                  >
                    {" "}
                    Approve
                  </button>
                  <br />
                  <button
                     onClick={() => handelApproved(allInfo._id, allInfo , "deny")}
                    disabled={allInfo.status === "approved" || allInfo.status === "deny" }
                    className="btn btn-ghost btn-sm "
                  >
                    Deny
                  </button>
                  <br />
                  {/* feedback */}

                  {
                    allInfo.status === 'approved'? <button  className="bg-blue-500  text-white font-bold py-2 px-4 rounded" disabled>Feedback</button>: <Feedback   id={allInfo._id} />
                  }
 
                  {/* feedback */}
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllClasses;

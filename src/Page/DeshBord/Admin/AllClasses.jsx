import React from "react";
import { useQuery } from "@tanstack/react-query";
import Feedback from "./../../../Components/Feedback";

const AllClasses = () => {
  const { data, isLoading, error, refetch } = useQuery([], () =>
    fetch("https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/allClasses").then((response) =>
      response.json()
    )
  );

  const handelApproved = (id, allClass, button) => {
    const status = allClass.status;
    if (button === "approved") {
      fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/allClasses/status/${id}`, {
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
    fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/allClasses/status/${id}`, {
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
    <div className="w-full h-full">
      <div className="text-center pb-7 font-semibold ">
        <h1 className=" text-2xl py-4 text-[#227179] ">This Is All Classes Control Page </h1>
        <p className="w-60 mx-auto bg-[#227179]  rounded-se-3xl rounded-es-3xl px-10 text-white ">Available Class : {data?.length} </p>
      </div>

      <div className="w-full ">
        <table className="table">
          <thead className="bg-[#227179] text-white h-16 ">
            <tr className="font-bold text-[15px] text-center">
              <th>#</th>
              <th>Image & Name</th>
              <th>Instructor Info </th>
              <th>Product Details</th>
              <th>Only Admin</th>
            </tr>
          </thead>
          {data?.map((allInfo, index) => (
            <tbody className=" text-center" key={allInfo._id}>
              <tr className="border-b border-[#227179]">
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
                    disabled={
                      allInfo.status === "approved" || allInfo.status === "deny"
                    }
                    onClick={() =>
                      handelApproved(allInfo._id, allInfo, "approved")
                    }
                    className="btn btn-success text-white btn-sm"
                  >
                    {" "}
                    Approve
                  </button>
                  <br />
                  <button
                    onClick={() => handelApproved(allInfo._id, allInfo, "deny")}
                    disabled={
                      allInfo.status === "approved" || allInfo.status === "deny"
                    }
                    className="btn btn-warning btn-sm  text-white my-2"
                  >
                    Deny
                  </button>
                  <br />
                  {/* feedback */}

                  {allInfo.status === "approved" ? (
                    <button
                      className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
                      disabled
                    >
                      Feedback
                    </button>
                  ) : (
                    <Feedback id={allInfo._id} />
                  )}

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

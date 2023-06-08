import React from "react";
import {
  useQuery
} from "@tanstack/react-query";
const AllClasses = () => {
  const { data, isLoading, error } = useQuery([], () =>
    fetch("http://localhost:5000/allClasses").then((response) => response.json())
  );

  return (
    <div className="w-full">
      <h1 className="text-center pb-10 font-bold text-3xl">This is all user Section</h1>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-xl">
              <th>#</th>
              <th>Image & Name</th>
              <th>Instructor Info </th>
              <th>Product Details</th>
              <th>Only Admin</th>
            </tr>
          </thead>
          {data?.map((allInfo , index) => (
            <tbody className=" " key={allInfo._id}>
              <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                <p>{allInfo.className}</p>
                  <div className="rounded w-32 h-20">
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
                    <p>{allInfo.price}</p>
                    <p>{allInfo.status}</p>
                    <p>{allInfo.seats}</p>
                </td>
                <th>
                  <button className="btn btn-ghost btn-sm"> Approve</button>
                  <br />
                  <button className="btn btn-ghost btn-sm ">Deny</button>
                  <br />
                  <button className="btn btn-ghost btn-sm">feedback</button>
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

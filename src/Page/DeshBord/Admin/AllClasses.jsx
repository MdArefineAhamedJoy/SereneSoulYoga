import React from "react";
import { useQuery } from "@tanstack/react-query";

const AllClasses = () => {
  const { data, isLoading, error , refetch} = useQuery([], () =>
    fetch("http://localhost:5000/allClasses").then((response) =>
      response.json()
    )
  );

  const handelApproved = (id , allClass) => {

   const status =  allClass.status 
   console.log({updateStunts: 'approv'})
    
    fetch(`http://localhost:5000/allClasses/status/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({status : "approved"})
    })
    .then(res => res.json())
    .then(data => {
      refetch()
      console.log(data)
      
    })
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
                  <p>{allInfo.className}</p>
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
                  <p>{allInfo.price}</p>
                  <p>{allInfo.status}</p>
                  <p>{allInfo.seats}</p>
                </td>
                <th>
                  <button onClick={()=>handelApproved(allInfo._id , allInfo)} className="btn btn-ghost btn-sm"> Approve</button>
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

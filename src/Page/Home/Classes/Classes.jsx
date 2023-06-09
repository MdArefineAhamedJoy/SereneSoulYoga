import React, { useContext } from "react";
import {
  useQuery
} from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/AuthProvider";

const Classes = () => {
  const { user} = useContext(AuthContext)
  const { data } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch(`http://localhost:5000/allClasses`).then((res) => res.json()),
  });

  const showAllClasses = data?.filter(
    (classes) => classes.status === "approved"
  );
  console.log(showAllClasses);
 
  return (
    <div className="grid grid-cols-2 px-4 gap-5">
      {showAllClasses?.map((classes) => (
        <div key={classes._id} className="card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2 ">
            <img
              className="p-3 rounded-3xl"
              src={classes.photoUrl}
              alt="Movie"
            />
          </figure>
          <div className="card-body w-1/2 ">
            <h2 className="card-title">{classes.className}</h2>
            <p>{classes.name}</p>
            <p>{classes.price}</p>
            <p>{classes.price}</p>
            <div className="card-actions justify-end">
              <button disabled={`!role === 'admin' && !role === 'instructor' `} className="btn btn-primary w-full">Select </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;

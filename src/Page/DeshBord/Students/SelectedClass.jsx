import React, { Fragment, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import usePayment from "../../../Hooks/usePayment";
import { AuthContext } from "../../../Provider/AuthProvider";

const SelectedClass = () => {
  const [paymentData] = usePayment();
  const { user } = useContext(AuthContext);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(
        `https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/allClasses/selected/${user?.email}`
      ).then((res) => res.json()),
  });

  const handelDelete = (id) => {
    fetch(
      `https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/classDelete/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    data?.length ? <div className="w-full h-full">
    <h1 className="text-center  font-semibold uppercase text-2xl mt-10 mb-7 text-[#227179] ">
      {" "}
      Your Selected Classes{" "}
    </h1>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        {data !== [] ? (
          <thead className="text-center uppercase bg-[#227179] text-white">
            <tr>
              <th>SL</th>
              <th>image</th>
              <th>Price & Site </th>
              <th>Name </th>
              <th>Method</th>
            </tr>
          </thead>
        ) : (
          <tbody>
            <tr>
              <td  className="text-center capitalize text-red-400 text-lg">you have not select any class</td>
            </tr>
          </tbody>
        )}

        {data?.map((selectedClass, index) => (
          <tbody key={selectedClass._id} className="text-center">
            {/* row 1 */}
            <tr className="border-b-4">
              <th>{index + 1}</th>
              <td>
                <div className="  h-28">
                  <img
                    className="w-full h-full rounded mx-auto"
                    src={selectedClass.photoUrl}
                    alt={selectedClass.className}
                  />
                </div>
              </td>
              <td>
                <p>
                  {" "}
                  <span>Price : </span> {selectedClass.price}
                </p>
                <p>
                  {" "}
                  <span>Site : </span> {selectedClass.availableSite}
                </p>
              </td>
              <td>
                <p>
                  {" "}
                  <span>ClassName :</span> {selectedClass.className}{" "}
                </p>
                <p>
                  <span>InstructorName:</span> {selectedClass.name}{" "}
                </p>
              </td>
              <th>
                <Link to={`/deashBoard/payment/${selectedClass._id}`}>
                  <button className="btn btn-success block mx-auto ">
                    Enroll
                  </button>
                </Link>

                <button
                  onClick={() => handelDelete(selectedClass._id)}
                  className="btn  btn-error block mt-1 "
                >
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  </div>: <h3 className="text-amber-500 font-semibold text-lg uppercase">You have not selected a class yet</h3>
  );
};

export default SelectedClass;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import usePayment from "../../../Hooks/usePayment";

const SelectedClass = () => {

  const [paymentData] = usePayment()

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch("http://localhost:5000/allClasses/selected").then((res) =>
        res.json()
      ),
  });

  const handelDelete = (id) => {
    fetch(`http://localhost:5000/classDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Price & Site </th>
              <th>Name </th>
              <th>Method</th>
            </tr>
          </thead>

          {data?.map((selectedClass, index) => (
            <tbody key={selectedClass._id} className="text-center">
              {/* row 1 */}
              {
                console.log(selectedClass._id)
              }
              <tr>
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
    </div>
  );
};

export default SelectedClass;

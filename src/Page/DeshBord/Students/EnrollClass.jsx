import React from "react";
import usePayment from "../../../Hooks/usePayment";

const EnrollClass = () => {
 const [paymentData] = usePayment()

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

          {paymentData?.map((data, index) => (
            <tbody key={data._id} className="text-center">
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="  h-28">
                    <img
                      className="w-full h-full rounded mx-auto"
                      src={data.photoUrl}
                      alt={data.className}
                    />
                  </div>
                </td>
                <td>
                  <p>
                    {" "}
                    <span>Price : </span> {data.price}
                  </p>
                </td>
                <td>
                  <p>
                    {" "}
                    <span>ClassName :</span> {data.className}{" "}
                  </p>
                  <p>
                    <span>InstructorName:</span> {data.name}{" "}
                  </p>
                </td>
                <th>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default EnrollClass;

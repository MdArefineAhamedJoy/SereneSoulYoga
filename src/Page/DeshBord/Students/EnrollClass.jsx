import React from "react";
import usePayment from "../../../Hooks/usePayment";

const EnrollClass = () => {
 const [paymentData] = usePayment()

  return (
    <div className="w-full">
      <h1 className="text-center mb-10 font-semibold text-2xl">Your Total Enroll Classes : {paymentData.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Purchase Account </th>
              <th>Name </th>
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
                    <span> </span> {data.paymentUser}
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
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default EnrollClass;

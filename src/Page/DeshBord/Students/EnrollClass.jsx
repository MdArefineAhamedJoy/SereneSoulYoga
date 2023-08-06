import React from "react";
import usePayment from "../../../Hooks/usePayment";

const EnrollClass = () => {
 const [paymentData] = usePayment()
  return (
    <div className="w-full h-full">
      <h1 className="text-center  font-semibold uppercase text-2xl mt-10 mb-7">Your Total Enroll Classes : {paymentData?.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center uppercase">
            <tr>
              <th>NO</th>
              <th>image</th>
              <th>Purchase Account </th>
              <th>Name </th>
              <th>Your FeedBack </th>
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
                <td>
                  <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded">Send Feedback</button>
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

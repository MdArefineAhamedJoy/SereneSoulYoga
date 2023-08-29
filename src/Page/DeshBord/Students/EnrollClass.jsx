import React from "react";
import usePayment from "../../../Hooks/usePayment";

const EnrollClass = () => {
  const [paymentData] = usePayment();
  return paymentData.length ? (
    <div className="w-full h-full">
      <h1 className="text-center  font-semibold uppercase text-2xl mt-10 mb-7 text-[#227179]">
        Your Total Enroll Classes : {paymentData?.length}{" "}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center uppercase bg-[#227179] text-white">
            <tr className="border-2 border-b-4 ">
              <th className="border-2 ">NO</th>
              <th className="border-2 "> image</th>
              <th className="border-2 ">Purchase Account </th>
              <th className="border-2 ">Name </th>
              <th className="border-2 ">Your FeedBack </th>
            </tr>
          </thead>

          {paymentData?.map((data, index) => (
            <tbody key={data._id} className="text-center">
              <tr className="border-b-2 border-[#227179]">
                <th className="border-x-2 border-[#227179]">{index + 1}</th>
                <td className="border-x-2 border-[#227179]">
                  <div className="  ">
                    <img
                      className="w-40 h-20 rounded mx-auto"
                      src={data.photoUrl}
                      alt={data.className}
                    />
                  </div>
                </td>
                <td className="border-x-2 border-[#227179]">
                  <p>
                    {" "}
                    <span> </span> {data.paymentUser}
                  </p>
                </td>
                <td className="border-x-2 border-[#227179]">
                  <p>
                    {" "}
                    <span>ClassName :</span> {data.className}{" "}
                  </p>
                  <p>
                    <span>InstructorName:</span> {data.name}{" "}
                  </p>
                </td>
                <td className="border-x-2 border-[#227179]">
                  <button className="bg-[#227179] hover:bg-[#195258] duration-300  text-white font-bold py-2 px-4 rounded">
                    Send Feedback
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  ) : (
    <h3 className="text-amber-500 font-semibold text-lg uppercase">Hello dear student you have not done any class end roll yet</h3>
  );
};

export default EnrollClass;

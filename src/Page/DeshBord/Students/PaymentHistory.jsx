import React from "react";
import usePayment from "../../../Hooks/usePayment";

const PaymentHistory = () => {
  const [paymentData] = usePayment();
  return (
    <div className="w-full h-full">
      <h1 className="text-center font-bold text-3xl mt-10 mb-7 uppercase">
        Your Payment History
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          {paymentData !== [] ? (
            <thead className="text-center uppercase bg-[#c9a470]">
              <tr>
                <th>NO</th>
                <th>Transition ID</th>
                <th>Payment Email </th>
                <th>Buy Class</th>
              </tr>
            </thead>
          ) : (
            <tbody>
              <tr>
                <td className="text-center capitalize text-red-400 text-lg">
                  No Payment History Available
                </td>
              </tr>
            </tbody>
          )}
          {paymentData?.map((payment, index) => (
            <tbody className="text-center">
              <tr className="border-b-4">
                <th>{index + 1}</th>
                <td>{payment?.transitionId}</td>
                <td>{payment?.paymentUser}</td>
                <td>{payment?.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

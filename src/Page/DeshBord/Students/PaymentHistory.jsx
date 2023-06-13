import React from "react";
import usePayment from "../../../Hooks/usePayment";

const PaymentHistory = () => {
  const [paymentData] = usePayment();
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-3xl mb-10">Your Payment History</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-center bg-red-300">
            <tr>
              <th>#</th>
              <th>Transition ID</th>
              <th>Payment Email </th>
              <th>Buy Class</th>
            </tr>
          </thead>
          {paymentData?.map((payment, index) => (
            <tbody className="text-center">
              <tr>
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

import React from "react";
import usePayment from "../../../Hooks/usePayment";

const PaymentHistory = () => {
  const [paymentData] = usePayment();
  return (
   paymentData.length ?  <div className="w-full h-full">
   <h1 className="text-center  font-semibold uppercase text-2xl mt-10 mb-7 text-[#227179]">
     Your Payment History
   </h1>
   <div className="overflow-x-auto">
     <table className="table table-zebra">
       {/* head */}
       {paymentData !== [] ? (
         <thead className="text-center uppercase bg-[#227179] text-white">
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
             <td className="text-center capitalize text-red-400 text-lg ">
               No Payment History Available
             </td>
           </tr>
         </tbody>
       )}
       {paymentData?.map((payment, index) => (
         <tbody className="text-center">
           <tr className="border-b-4 border-[#227179] text-[#227179]">
             <th>{index + 1}</th>
             <td>{payment?.transitionId}</td>
             <td>{payment?.paymentUser}</td>
             <td>{payment?.price}</td>
           </tr>
         </tbody>
       ))}
     </table>
   </div>
 </div> : <h3 className="text-center capitalize text-red-400 text-lg">You have not purchased any classes</h3>
  );
};

export default PaymentHistory;

import React, { useEffect, useState } from "react";
import PageTitle from "../../../Components/PageTitle";

const MemberShip = () => {
  const [packages, setPackages] = useState([]);
  const [colors , setColors] = useState("")
  useEffect(() => {
    fetch(`http://localhost:5000/memberShip/package`)
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="md:mx-10">
      <div></div>
      <PageTitle
        title="READY TO GET STARTED?"
        subTitle="Join today and get a full year of Yoga International membership for $169.00/year – a 20% savings on our monthly membership price."
        url=""
      ></PageTitle>
      <div className=" relative">
        <table className="table p-10">
          {/* head */}
          <thead>
            <tr className=" bg-base-200 border-b border-black">
              <td className="font-normal text-lg">Plus applicable tax</td>
              <th className= {`text-center text-black  ${colors === "monthly" ? "bg-gray-200" : "bg-base-200" }`}>
                <span className="font-extrabold text-xl">$19.99 </span> <br />{" "}
                billed monthly{" "}
              </th>
              <th className={`text-center text-black  ${colors === "annually" ? "bg-gray-200" : "bg-base-200" }`}>
                <span className="font-extrabold text-xl">$169.00</span> <br />{" "}
                billed annually
              </th>
            </tr>
          </thead>
          <tbody>
            {packages.map(({ access, monthly, annual , _id}) => (
              <tr className="bg-base-200 border-b border-black" key={_id}>
                <td className="w-8/12">{access}</td>
                <td className={`text-center ${colors === "monthly" ? "bg-gray-200" : "bg-base-200" }`}>
                  {monthly === "true"
                    ? "loading"
                    : monthly === "discount"
                    ? "15%"
                    : ""}
                </td>
                <td className={`text-center ${colors === "annually" ? "bg-gray-200" : "bg-base-200" }`}>
                  {annual === "true"
                    ? "loading"
                    : annual === "discount"
                    ? "20%"
                    : ""}
                </td>
              </tr>
            ))}
            <div className={`bg-base-200 px-16 shadow-md  rounded-md py-5 text-center absolute top-[-50px] right-[207px] font-semibold ${colors === "monthly" ? "bg-green-600 text-white" : "bg-base-200 text-black" } `} onClick={()=>setColors("monthly")}>
              Monthly
            </div>
            <div className={`bg-base-200 px-16 shadow-md rounded-md py-5 text-center absolute top-[-50px] right-[10px] ${colors === "annually"? "bg-green-600 text-white": "bg-base-200 text-black " }`} onClick={()=>setColors("annually")}>
            <div className="relative" >
            <p className="absolute px-11 py-1 rounded-md top-[-47px] right-[-48px] bg-yellow-400"> saved20% </p>
            </div>
             <p> Annually</p>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberShip;

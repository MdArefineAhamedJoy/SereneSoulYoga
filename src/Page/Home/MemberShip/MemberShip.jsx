import React, { useEffect, useState } from "react";
import PageTitle from "../../../Components/PageTitle";

const MemberShip = () => {
  const [packages, setPackages] = useState([]);
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
        title="Choose a membership to fit your needs"
        subTitle=""
        url=""
      ></PageTitle>
      <div className="grid grid-cols-3 gap-5">
        {packages.map(
          ({
            _id,
            type,
            access,
            exclusiveAccess,
            curatedPrograms,
            livestreamDiscount,
            favoriteTeachers,
            curatedClasses,
            appAccess,
            favoriteClasses,
            price,
          }) => (
            <div className="bg-white shadow-md  rounded relative " key={_id}>
              <div className="p-5">
                <h3 className="mt-5 text-2xl font-semibold ">{type}</h3>
                <p className="my-3">{access}</p>
                <p>{exclusiveAccess}</p>
                <p className="my-3">{curatedPrograms}</p>
                <p>{livestreamDiscount}</p>
                <p className="my-3">{favoriteTeachers}</p>
                <p>{curatedClasses}</p>
                <p className="my-3">{appAccess}</p>
                <p>{favoriteClasses}</p>
                <p className="mt-3 pb-6">{price}</p>
              </div>
              <button className=" w-full p-2 text-white uppercase font-semibold bg-blue-600 absolute bottom-0">
                Buy Now{" "}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MemberShip;

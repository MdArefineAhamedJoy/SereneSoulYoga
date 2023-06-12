import React from "react";

const PageTitle = ({ title, url, subTitle }) => {
  return (
    <div className="mt-24 pb-10 ">
      <div className="w-10/12 mx-auto text-center ">
        <h1
          style={{ wordSpacing: "2px", letterSpacing: "6px" }}
          className=" text-2xl  font-bold"
        >
          {title}
        </h1>
        <div className="divider w-1/2 mx-auto  border-dotted border-t-2 border-amber-500">
          <img src={url ? url : "or"} alt="" />
        </div>
        <p className="md:px-32 pt-4">{subTitle}</p>
      </div>
    </div>
  );
};

export default PageTitle;

import React, { useEffect, useState } from "react";

const TopYogaCart = ({ yoga }) => {
  const { title, image, description , textColor , border } = yoga;
  return (
    <div className="card card-compact text-center">
      <div className="card-body">
        <h2   className={`text-3xl font-semibold mb-8  ${textColor}` }>{title}</h2>
        <figure>
          <img
            className={`w-36   h-36 border-4  transform hover:scale-125 transition-transform duration-300 rounded-full ${border}`}
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="divider mt-10 border-t-2 border-dotted border-amber-700"></div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TopYogaCart;

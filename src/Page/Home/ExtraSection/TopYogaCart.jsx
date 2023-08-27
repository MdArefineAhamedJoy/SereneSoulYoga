import React, { useEffect, useState } from "react";

const TopYogaCart = ({ yoga }) => {
  const { title, image, description , textColor , border } = yoga;
  const cardStyle = {
    borderColor: border,
  };

  const textStyle = {
    color: textColor,
  };
  return (
    <div className="card card-compact text-center group">
      <div className="card-body">
        <h2   className={`text-3xl font-semibold mb-8 ` } style={textStyle}>{title}</h2>
        <figure>
          <img
            className={`w-36   h-36 border-4  transform group-hover:scale-125 transition-transform duration-300 rounded-full `} style={cardStyle} 
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="divider mt-10 border-t-2 border-dotted border-amber-700"></div>
        <p>{description}  </p>
      </div>
    </div>
  );
};

export default TopYogaCart;

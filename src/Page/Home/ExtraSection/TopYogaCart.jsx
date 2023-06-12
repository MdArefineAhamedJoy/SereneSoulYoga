import React, { useEffect, useState } from "react";

const TopYogaCart = ({ yoga }) => {
  const { title, image, description } = yoga;

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "black", "purple"]; 
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const borderColor = getRandomColor();
  return (
    <div className="card card-compact text-center">
      <div className="card-body">
        <h2   className="text-3xl font-semibold mb-8">{title}</h2>
        <figure>
          <img
            style={{ border: `4px solid ${borderColor}` }}
            className="w-36   h-36 border-4 border-amber-400 transform hover:scale-125 transition-transform duration-300 rounded-full "
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

import React, { useEffect, useState } from "react";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/instructor`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [classes]);
  return (
    <div className="w-full gap-4">
      <h1>Total Student Enroll</h1>
      {classes.map((classData) => (
        <div key={classData._id} className="card my-5 bg-base-100 shadow-xl image-full">
        <figure className="h-52 my-auto w-full"><img className="h-full w-full" src={classData.photoUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default MyClasses;

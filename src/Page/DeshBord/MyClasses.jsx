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
    <div className="grid grid-cols-2 w-full gap-4">
      {classes.map((classData) => (
        <div key={classData._id} className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={classData.photoUrl}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;

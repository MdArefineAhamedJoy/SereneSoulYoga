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
        <div key={classData._id} className="card my-5 mx-5  lg:card-side bg-base-100 ">
          <div className="card-body md:w-6/12 ">
            <h2 className="card-title">Class Name : {classData.className}</h2>
            <p><span>Instructor Name :</span> {classData.name} </p>
            <p><span>Instructor Email :</span> {classData.email} </p>
            <p><span>Class Price :</span> {classData.price} </p>
            <p><span>Class Status :</span> {classData.status}</p> 
            <p><span>Available Sites :</span> {classData.site} </p>
            <p><span>Total Enroll:</span> {classData.site? classData.site : 0} </p>
  
            <div className="card-actions mx-auto">
              <button className="btn btn-primary"> Update</button>
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
          <figure className="h-96 w-6/12">
            <img 
             className="h-full"
              src={classData.photoUrl}
              alt="Album"
            />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;

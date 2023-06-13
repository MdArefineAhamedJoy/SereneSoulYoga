import React, { useEffect, useState } from "react";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const findInstructor = data.filter((Instructor) => Instructor.role === "instructor");
        setInstructors(findInstructor);
      });
  });

  return (
    <div className="grid grid-cols-2 gap-5 md:mx-10 py-20">
      {instructors.map((instructor) => (
        <div key={instructor._id} className="card lg:card-side bg-base-100 p-5 shadow-xl">
          <figure >
            <img
              className="w-40 h-40 rounded-full "
              src={instructor.image}
              alt="Album"
            />
          </figure>
          <div className="card-body items-center  ">
            <h2 className="card-title">Name : {instructor.name}</h2>
            <h2 className="card-title">Name : {instructor.email}</h2>
            <p>Roll  {instructor.email}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">see classes</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;

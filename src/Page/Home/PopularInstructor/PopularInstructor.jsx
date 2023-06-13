import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../../Components/PageTitle";
const PopularInstructor = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(`http://localhost:5000/popular/instructor`).then((res) =>
        res.json()
      ),
  });

  return (
    <div>
      <PageTitle
        title="Popular Instructor"
        subTitle="Popular instructor inspires students with engaging teaching methods, fostering a love for learning and nurturing their talents."
      ></PageTitle>
      <div  className="grid md:grid-cols-3 gap-8  grid-cols-1 w-11/12 mx-auto   min-h-screen">
        {data?.map((instructor) => (
          <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl duration-500   cursor-pointer">
            <figure className="px-10 pt-8">
              <img
                src={instructor.image}
                alt="instructor image"
                className="w-40 h-40 rounded-full transition duration-300 ease-in-out transform  hover:scale-105"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{instructor.name}</h2>
              <h2 className="card-title">{instructor.email}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;

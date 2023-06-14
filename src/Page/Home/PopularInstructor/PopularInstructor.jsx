import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
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
      <div className="grid md:grid-cols-3 md:gap-8 gap-3 w-full grid-cols-1 md:w-11/12 mx-auto">
        {data?.map((instructor) => (
          <motion.div
            key={instructor._id}
            className="card bg-base-100 shadow-xl duration-500 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <figure className="px-10 pt-8">
              <motion.img
                src={instructor.image}
                alt="instructor image"
                className="w-40 h-40 rounded-full transition duration-300 ease-in-out transform"
                whileHover={{ scale: 1.1 }}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{instructor.name}</h2>
              <h2 className="card-title">{instructor.email}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;

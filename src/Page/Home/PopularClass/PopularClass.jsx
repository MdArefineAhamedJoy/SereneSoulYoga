import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../../Components/PageTitle";

const PopularClass = () => {
  const {
    isLoading,
    error,
    data: popularClass,
  } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch(`http://localhost:5000/popularClass`).then((res) => res.json()),
  });

  return (
    <div >
      <PageTitle title='Popular Yoga Class' subTitle='Discover the joy of yoga in our popular class. Strengthen your body, calm your mind, and find balance through invigorating poses and mindful practices. Join us on the mat today' url=''></PageTitle>
      <div className="flex  items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {popularClass?.map((classes) => (
            <div
              key={classes._id}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-[400px] w-96">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={classes.photoUrl}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Beauty
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;

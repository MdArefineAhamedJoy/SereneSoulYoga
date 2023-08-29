import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../../Components/PageTitle";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight} from "react-icons/ai";

const PopularClass = () => {
  const {
    isLoading,
    error,
    data: popularClass,
  } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch(
        `https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/popularClass`
      ).then((res) => res.json()),
  });

  return (
    <div className="relative">
      <PageTitle
        title="Popular Yoga Class"
        subTitle="Discover the joy of yoga in our popular class. Strengthen your body, calm your mind, and find balance through invigorating poses and mindful practices. Join us on the mat today"
        url=""
      ></PageTitle>
      <Link to={'classes'}>
        <button className="absolute  flex items-center gap-1 bg-[#227179] text-white py-2 px-7 rounded-full md:top-[17%] top-[8%] left-5 z-10 ">
          Browse All Class
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </button>
      </Link>
      <div className="flex  items-center justify-center md:mx-10 relative">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {popularClass?.map((classes) => (
            <div
              key={classes._id}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl rounded-md hover:shadow-black/30"
            >
              <div className=" h-96 w-96 ">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={classes.photoUrl}
                  alt=""
                />
              </div>
              <div className="my-hover-effect"></div>
              <div className="cards-body">
                <h1 className="font-dmserif text-2xl font-bold text-[#5abec9]">
                  {classes?.className}
                </h1>

                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Price : ${classes?.price}
                </p>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  instructor : {classes?.name}
                </p>
                <button className="rounded-full bg-[#227179] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 ;">
                  <Link className="" to="/classes">
                    See More
                  </Link>
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

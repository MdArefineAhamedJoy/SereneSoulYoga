import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import PageTitle from "../../../Components/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper";

const PopularInstructor = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(
        `https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/popular/instructor`
      ).then((res) => res.json()),
  });
  return (
    <div>
      <PageTitle
        title="Popular Instructor"
        subTitle="Popular instructor inspires students with engaging teaching methods, fostering a love for learning and nurturing their talents."
      ></PageTitle>
      <div className="w-11/12 mx-auto">
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {data?.map((Instructor) => (
            <div
              key={Instructor?._id}
              className="grid md:grid-cols-3 gap-3 rounded-none  group"
            >
              <SwiperSlide>
                <motion.div
                  className=" shadow-xl text- duration-500 cursor-pointer h-full bg-white hover:text-[#2b666c] text-neutral-600  mx-1 rounded-md"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <figure className="">
                    <motion.img
                      src={Instructor?.image}
                      alt="instructor image"
                      className="w-full h-44 rounded-t-md mx-auto  transition duration-700  transform"
                    />
                  </figure>
                  <div className="mt-5 items-center text-center">
                    <h2 className="font-bold uppercase text-lg">
                      {Instructor?.name}
                    </h2>
                    <h2 className="">{Instructor?.email}</h2>
                    <button className="bg-[#227179] mb-5  px-7 font-semibold hover:bg-[#153f44] duration-300  py-2 my-2 uppercase text-sm text-white rounded-ss-xl rounded-ee-xl">
                      details 
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularInstructor;

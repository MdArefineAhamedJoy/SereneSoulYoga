import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import PageTitle from "../../../Components/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper";
import Instructor from "./../Instructor/Instructor";

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
      <div>
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 2,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {data?.map((Instructor) => (
            <div key={Instructor?._id} className="grid md:grid-cols-4 gap-3 rounded-none  ">
              <SwiperSlide >
                <motion.div
                  className=" shadow-xl text-white duration-500 cursor-pointer h-96 bg-[#227179] hover:bg-[#227179] mx-1 rounded-md"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <figure className="">
                    <motion.img
                      src={Instructor?.image}
                      alt="instructor image"
                      className="w-11/12 h-60 rounded-t-md mx-auto  transition duration-700  transform"
                      whileHover={{ scale: 1.1 }}
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="">{Instructor?.name}</h2>
                    <h2 className="">{Instructor?.email}</h2>
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

import React from "react";
import PageTitle from "../../../../Components/PageTitle";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper";
import { PiNotebookBold } from "react-icons/pi";

const HealthService = () => {
  const [healths, setHealths] = useState([]);
  useEffect(() => {
    fetch("healty.json")
      .then((response) => response.json())
      .then((data) => setHealths(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto my-32">
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 3,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 9,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 12,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {healths.map((health) => (
          <SwiperSlide key={health?._id} className="pb-16 pt-10 group">
            <div className="w-full shadow-md p-4">
              <div className="relative pb-12">
                <div className="w-24 mx-auto h-24 rounded-full bg-gray-300"></div>
                <div className="h-[70px] w-[73px] absolute  bottom-6 right-1/2">
                  <img
                    className="w-full h-full border-e-2 rounded-se-2xl text-red-400 border-red-500"
                    src={health?.logo}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center ">
                <div className="py-5">
                  <p>{health?.title}</p>
                  <h2 className="text-lg font-semibold group-hover:text-[#227179]">{health?.topic}</h2>
                </div>
                <div  className="overflow-hidden">
                  <img
                    className="w-52 h-24 mx-auto group-hover:scale-125  transform transition-transform duration-500 overflow-hidden"
                    src={health?.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HealthService;

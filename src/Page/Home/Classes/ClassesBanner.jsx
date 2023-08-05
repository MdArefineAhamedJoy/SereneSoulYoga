import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers";
import { useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../../Components/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper";

const ClassesBanner = () => {
  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(
        `https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/approveClass/?status=approved`
      ).then((res) => res.json()),
  });
  return (
    <div>
      <Swiper
        slidesPerView={3}
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
        {data?.map((slider) => (
          <SwiperSlide key={slider?._id}>
            <div className="relative">
              <img className="h-[400px]" src={slider?.photoUrl} alt="" />
              <h3 className="font-semibold absolute bottom-0 left-20 text-white text-2xl">
                {slider.className}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClassesBanner;

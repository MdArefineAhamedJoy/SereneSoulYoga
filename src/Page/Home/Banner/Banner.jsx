import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper";
const Banner = () => {
  const [creosol, setCresol] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/banner")
      .then((res) => res.json())
      .then((data) => {
        setCresol(data);
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {creosol.map((data) => (
          <SwiperSlide key={data.id}>
            <img className="w-full h-screen" src={data.cover_image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;

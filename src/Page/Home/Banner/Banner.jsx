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
          <SwiperSlide key={data._id}>
            <div className="relative">
              <img className="w-full h-screen" src={data.image} alt="" />
              <div className="absolute top-20 left-10 right-20">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;

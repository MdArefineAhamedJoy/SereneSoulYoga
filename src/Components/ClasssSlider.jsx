import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper";

const ClasssSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
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
        <SwiperSlide>Slide 1</SwiperSlide>

      </Swiper>
    </div>
  );
};

export default ClasssSlider;

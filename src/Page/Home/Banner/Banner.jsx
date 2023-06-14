import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const slideAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

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
        modules={[Autoplay, Pagination, Navigation]}
      >
        {creosol.map((data) => (
          <SwiperSlide key={data._id}>
            <div className="relative">
              <motion.img
                className="w-full h-screen opacity-80" // Add the opacity class here
                src={data.image}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="absolute top-20 left-10 right-20"
                initial={slideAnimation.initial}
                animate={slideAnimation.animate}
                transition={slideAnimation.transition}
              >
                <motion.h2
                  className="text-4xl text-white italic font-serif"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {data.title}
                </motion.h2>
                <motion.p
                  className="text-xl pt-5 w-1/2 text-[#7e8446] italic font-sans"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {data.description}
                </motion.p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;


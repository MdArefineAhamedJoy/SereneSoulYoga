import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination , Keyboard} from "swiper";

const Banner = () => {
  const [creosol, setCresol] = useState([]);

  useEffect(() => {
    fetch("https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/banner")
      .then((res) => res.json())
      .then((data) => {
        setCresol(data);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={true}

          modules={[Keyboard,  Navigation,  Autoplay]}
          className="mySwiper h-screen"
      >
        {creosol.map((data) => (
          <SwiperSlide key={data._id}>
            <div className="relative  ">
              <img
                className="w-full h-screen "
                src={data.image}
                alt=""
                data-aos="fade-down"
                data-aos-duration="1500"
              />
              <div className="absolute w-10/12 left-[10%] top-[30%] ">
                <div className="text-center">
                  <h2
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="text-2xl font-extrabold text-white italic font-serif mb-8  w-4/5 mx-auto"
                  >
                    {data.title}
                  </h2>
                  <div className="text-xl text-center   mb-7 text-[#227179] font-semibold italic font-sans">
                    <p
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                      className="text-center"
                    >
                      {data.description}
                    </p>
                  </div>
                  <button className="bg-[#227179] mx-auto w-fit block text-white p-2 px-4 uppercase mt-5 rounded-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;

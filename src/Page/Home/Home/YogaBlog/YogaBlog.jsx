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

const YogaBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="my-32">
      <PageTitle
        title={" UNPARALLELED ARTICLE LIBRARY "}
        subTitle={
          "Vetted yoga resources designed to deepen your yogic understanding, expand your teaching knowledge, and support your growth."
        }
      ></PageTitle>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 500,
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
          "@2.00": {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        modules={[Pagination , Navigation , Autoplay]}
        className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog?._id} className="pb-16 pt-10">
            <div className="shadow-lg rounded-sm">
              <div className="w-full h-52">
                <img className="w-full h-full" src={blog?.image} alt="" />
              </div>
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <PiNotebookBold></PiNotebookBold>
                  <h3 className="text-[#227179] ">{blog?.blogName}</h3>
                </div>
                <h2 className="text-lg font-semibold pb-10 pt-1">{blog?.title.slice(0, 30)}...</h2>
                <div className="flex  gap-2 items-center">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={blog?.author?.image}
                    alt=""
                  />
                  <p>
                    <small className="font-bold">{blog?.author?.name}</small>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YogaBlog;

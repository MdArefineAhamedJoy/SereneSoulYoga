import React from "react";
import PageTitle from "./../../../Components/PageTitle";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination , Autoplay } from "swiper";
import { useEffect } from "react";
import "swiper/css/autoplay";

const FeedBack = () => {
  const [userFeedBack, setUserFeedBack] = useState([]);
  useEffect(() => {
    fetch("https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/feedback")
      .then((response) => response.json())
      .then((result) => {
        setUserFeedBack(result);
      });
  }, []);

  return (
    <div>
      <PageTitle
        title={
          " Beautiful  words from our very best clients"
        }
        subTitle={'Discover the transformative journeys of our cherished patrons as they reflect on their profound encounters with us. Uncover a tapestry of heartwarming stories that illuminate the power of our offerings in their lives.  '}
      ></PageTitle>
      <section className="md:w-11/12 w-full mx-auto bg-slate-100 rounded">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard,  Navigation, Pagination , Autoplay]}
          className="mySwiper"
        >
          {userFeedBack.map((feedback) => (
            <SwiperSlide key={feedback?.id}>
              <div
                className="md:h-80 shadow shadow-[#227179] border-b-8 border-[#227179] rounded-md
                bg-base-100 p-10 mx-4 my-14 text-[#227179]"
              >
                <div className="w-full h-full rounded-lg">
                  <p className="text-lg font-light capitalize">{feedback?.comment.slice(0, 250)}</p>
                  <div className="flex mt-5 gap-3">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={feedback?.image}
                      alt=""
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{feedback?.name}</h3>
                      <p>{feedback?.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default FeedBack;

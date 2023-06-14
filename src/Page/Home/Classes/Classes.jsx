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
import { AuthContext } from "../../../Provider/AuthProvider";

const Classes = () => {
  const [allUser] = useUsers();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const navigator = useNavigate();
  const [userRoll, setUserRoll] = useState('student');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findUser = allUser?.find((rolls) => rolls?.email === user?.email);
    const userStatus = findUser?.role;
    setUserRoll(userStatus);
  }, [allUser, user]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedUserRoll = 'admin';
      setUserRoll(fetchedUserRoll);
      setLoading(false);
    }, 2000);
  }, []);

  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/approveClass/?status=approved`)
        .then((res) => res.json()),
  });

  const handleSelectedClass = (classes) => {
    if (!user?.email) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Please Login First',
        showConfirmButton: false,
        timer: 1500,
      });
      return navigator('/login');
    }

    const classId = classes._id;
    delete classes._id;
    const userEmail = user?.email;

    fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/allClasses/select`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...classes, classId, userEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Confirm Select This Class',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div>
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
                <h3 className="font-semibold absolute bottom-0 left-20 text-white text-2xl">{slider.className}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <PageTitle
        title="Building a Strong Foundation in Yoga Fundamentals"
        subTitle="Cultivating Harmony, Strength, and Flexibility through Mindful Movement, Breath Control, and Meditation Techniques for Overall Well-being and Inner Balance"
      />

      <div className="grid grid-cols-3 px-4 gap-5">
        {data?.map((classes) => (
          <div
            key={classes?._id}
            className={`card bg-base-100 shadow-xl ${
              parseInt(classes.availableSite) === 0 ? 'bg-red-500' : ''
            }`}
          >
            <figure>
              <img className="w-full h-64" src={classes?.photoUrl} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name : {classes?.className}</h2>
              <p>Instructor Name :  {classes?.name}</p>
              <p>Available Site :  Site {classes?.availableSite}</p>
              <p>Price :  ${classes?.price}</p>
              <div className="card-actions justify-center">
                <button
                  disabled={userRoll === 'instructor' || userRoll === 'admin'}
                  onClick={() => handleSelectedClass(classes)}
                  className="btn"
                >
                  selected
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;

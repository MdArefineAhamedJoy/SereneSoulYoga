import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const { singIn, singInWithGoogle, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    singIn(data?.email, data?.password)
      .then((res) => {
        const loginUsers = res.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handelGoogleSingIn = () => {
    singInWithGoogle()
      .then((res) => {
        const loginUsers = res.user;
        if (loginUsers) {
          const existingUser = {
            name: loginUsers.displayName,
            email: loginUsers.email,
            role: "",
            image: loginUsers?.photoURL,
          };
          fetch(
            `https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/users`,
            {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(existingUser),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId > 0) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate(from, { replace: true });
              }
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero h-full  py-20">
        <div className=" flex justify-center h-full  w-full">
          <div className="card w-5/12 border-t-2 border-r-2  border-[#227179] shadow-lg shadow-[#227179] bg-base-100 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#227179]  font-semibold">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#227179]  font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt  text-[#227179]  font-semibold link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#227179] hover:bg-[#123d42]  text-white duration-500"
                  type="submit"
                  value="Login"
                />
                <div className="divider mt-4 ">OR</div>
                <div className="flex gap-10 justify-center mb-4">
                  <button
                    onClick={handelGoogleSingIn}
                    className="btn btn-outline rounded-full text-[#227179]  hover:bg-[#227179] hover:text-white duration-500"
                  >
                    Login With Google
                  </button>
                  <button className="btn btn-outline  text-[#227179]  hover:bg-[#227179] hover:text-white duration-500 rounded-full">Login With Github </button>
                </div>
              </div>
              <span>
                Fist time Visits?{" "}
                <Link to="/register" className="link link-warning">
                  place register
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

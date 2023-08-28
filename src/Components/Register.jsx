import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {   singUp , updateUsers } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // firebase sign up system
    if (data.password === data.confirmPassword) {
      singUp(data?.email, data?.password)
        .then((res) => {
          const signUpUser = res.user;
          // user data update system
          console.log();
          updateUsers(data?.name, data?.photoUrl)
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error.message);
            });
          if (signUpUser) {
            const existingUser = {
              name: data?.name,
              email: signUpUser.email,
              image: data?.photoUrl,
              role: "",
            };
            fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/users`, {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(existingUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/')
                }
              });
          }
        })
        .catch((error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${error?.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div>
      <div>
        <div className="hero h-full py-20">
          <div className="flex justify-center w-full">
            <div className="card w-5/12 shadow-lg shadow-[#227179] bg-base-100 border-t-2 border-r-2  border-[#227179] ">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-[#227179]  font-semibold">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-[#227179]  font-semibold">Photo Url</span>
                  </label>
                  <input
                    {...register("photoUrl", { required: true })}
                    type="text"
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-[#227179]  font-semibold">Email</span>
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
                    <span className="label-text  text-[#227179]  font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className={`input input-bordered ${
                      errors.password ? "input-error" : ""
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password should be at least 6 characters long",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/,
                        message:
                          "Password should include at least one capital letter and one special character",
                      },
                    })}
                  />
                  {errors.password && (
                    <label className="label">
                      <small className="label-text-alt text-error">
                        {errors.password.message}
                      </small>
                    </label>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-[#227179]  font-semibold">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={`input input-bordered ${
                      errors.confirmPassword ? "input-error" : ""
                    }`}
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <label className="label">
                      <small className="label-text-alt text-error">
                        {errors.confirmPassword.message}
                      </small>
                    </label>
                  )}
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#227179] hover:bg-[#123d42] text-white duration-500"
                    type="submit"
                    value="Register"
                  />
                </div>
                <span>
                  Already a user?{" "}
                  <Link to="/login" className="link link-warning">
                    Login
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


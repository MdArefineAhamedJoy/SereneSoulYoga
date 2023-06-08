import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
  const { singUp } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    singUp(data?.email, data?.password)
      .then((res) => {
        const singUpUser = res.user;
        if (singUpUser) {
          console.log(singUpUser);
          const existingUser = {
            name: singUpUser.displayName,
            email: singUpUser.email,
            role: "",
          };
          fetch(`http://localhost:5000/users`, {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(existingUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId ) {
                reset()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${error?.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className=" flex justify-center  w-full">
            <div className="card w-5/12  shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("Name", { required: true })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
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
                    <span className="label-text">Email</span>
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                    {...register("confirmPassword", { required: true })}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

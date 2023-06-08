import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
    const {  singIn , singInWithGoogle} = useContext(AuthContext)
    // console.log(singIn)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        singIn(data?.email , data?.password)
        .then(res =>{
            const loginUsers = res.user
            console.log(loginUsers)
        })
        .then(error => {
            console.log(error.message)
        })
    };

    const handelGoogleSingIn = () =>{
        singInWithGoogle()
        .then(res =>{
            const loginUsers = res.user
            console.log(loginUsers)
            if (loginUsers) {
              console.log(loginUsers);
              const existingUser = {
                name: loginUsers.displayName,
                email: loginUsers.email,
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
                  if (data.insertedId > 0) {
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
        .catch(error =>{
            console.log(error)
        })
    }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" flex justify-center  w-full">
          <div className="card w-4/12  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
                <div className="divider mt-4 ">OR</div>
                <button onClick={handelGoogleSingIn} className="btn btn-outline hover:text-black hover:bg-base-100">Login With Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

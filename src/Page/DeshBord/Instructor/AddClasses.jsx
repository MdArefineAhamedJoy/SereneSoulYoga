import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddClasses = () => {
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const imag_token = import.meta.env.VITE_image_upload_token;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   console.log(data)
    const formData = new FormData();
    formData.append("image", data.classPhoto[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${imag_token}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        if (image.success) {
          const photoUrl = image.data.url;
          const { name, email, className, price , availableSite } = data;
          const InstructorData = {
            name,
            email,
            className,
            price,
            photoUrl,
            availableSite,
          };
          InstructorData.status = "pending";
          InstructorData.enroll = "0";
          fetch("http://localhost:5000/instructor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(InstructorData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Add Class SuccessFully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  return (
    <div className="w-full">
      <h1 className="text-center mt-8">ADD Class</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="md:flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              value={user?.displayName ? user?.displayName : "User Name"}
              {...register("name", { required: true })}
              type="text"
              placeholder="name"
              className="input input-bordered"
              readOnly={true}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              value={user?.email}
              {...register("email", { required: true })}
              type="text"
              placeholder="email"
              className="input input-bordered"
              readOnly={true}
            />
          </div>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            {...register("className", { required: true })}
            type="text"
            placeholder="Class Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Photo</span>
          </label>
          <input
            {...register("classPhoto", { required: true })}
            type="file"
            placeholder="Class Photo "
            className="input input-bordered"
          />
        </div>
        <div className="md:flex w-full mx-auto gap-10">
          <div className="form-control w-3/5">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered"
              {...register("price", { required: true })}
            />
          </div>
          <div className="form-control w-3/5">
            <label className="label">
              <span className="label-text">Available Site</span>
            </label>
            <input
              type="number"
              placeholder="Available Site"
              className="input input-bordered"
              {...register("availableSite", { required: true })}
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default AddClasses;

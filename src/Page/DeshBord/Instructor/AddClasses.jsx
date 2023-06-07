import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddClasses = () => {
  const { user } = useContext(AuthContext);

  const displayName = user?.displayName ?? "Name";
  const email = user?.email ?? "Name";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            value={displayName}
            {...register("Name", { required: true })}
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
            value={email}
            { ...register("email", { required: true })}
            type="text"
            placeholder="email"
            className="input input-bordered"
            readOnly={true}
          />
        </div>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Class  Name</span>
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
        <div className="form-control w-1/2 mx-auto">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="Price"
            placeholder="Price"
            className="input input-bordered"
            {...register("Price", { required: true })}
          />
        </div>
       
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default AddClasses;

import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers";
import PrivateRoute from "../../../Routes/PrivateRoute";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const status = "approved";
  const { user } = useContext(AuthContext);
  const [allUser] = useUsers();
  const navigate = useNavigate()


  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(`http://localhost:5000/approveClass/?status=approved`).then((res) =>
        res.json()
      ),
  });

  const handelSelectedClass = (classes) => {
    if(!user?.email){
      return navigate('/login')
    }
    const classId = classes._id;
    delete classes._id;
    const userEmail = user?.email;
    fetch(`http://localhost:5000/allClasses/select`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...classes, classId, userEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Confirm Select This Class ",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="grid grid-cols-3 px-4 gap-5">
      {data?.map((classes) => (
        <div
          key={classes._id}
          className={`card card-side bg-base-100 shadow-xl ${
            parseInt(classes.availableSite) === 0 ? "bg-red" : "bg-slate-400"
          }`}
        >
          <figure className="w-1/2 ">
            <img
              className="p-3 rounded-3xl"
              src={classes.photoUrl}
              alt="Movie"
            />
          </figure>
          <div className="card-body w-1/2 ">
            <h2 className="card-title">{classes.className}</h2>
            <p>{classes.name}</p>
            <p>Site {classes.availableSite}</p>
            <p>Price {classes.price}</p>
            <div className="card-actions justify-end">
  

                  <button
                    disabled={
                      user?.role === "instructor" || user?.role === "admin"
                    }
                    onClick={() => handelSelectedClass(classes)}
                    className="btn btn-primary w-full"
                  >
                    Select{" "}
                  </button>


            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;

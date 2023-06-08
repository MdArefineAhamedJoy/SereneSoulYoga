import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const Classes = () => {
  const { data } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch(`http://localhost:5000/allClasses`).then((res) => res.json()),
  });

  const showAllClasses = data?.filter(
    (classes) => classes.status === "approved"
  );
  console.log(showAllClasses);

  return (
    <div className="grid grid-cols-2 px-10 gap-5">
      {showAllClasses?.map((classes) => (
        <div key={classes._id} className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;

import React from "react";
import { useQuery } from "@tanstack/react-query";
const PopularInstructor = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(`http://localhost:5000/popular/instructor`).then((res) =>
        res.json()
      ),
  });
  console.log(data , " ......................");
  return (
    <div className="grid md:grid-cols-3 grid-cols-1">
      {data?.map((instructor) => (
        <div key={instructor._id} className="card w-96 glass">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularInstructor;

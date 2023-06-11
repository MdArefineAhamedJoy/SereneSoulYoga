import React from "react";
import { useQuery } from "@tanstack/react-query";

const PopularClass = () => {
  const {
    isLoading,
    error,
    data: popularClass,
  } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch(`http://localhost:5000/popularClass`).then((res) => res.json()),
  });

  return (
    <div className="grid md:grid-cols-3">
      {popularClass?.map((classes) => (
        <div key={classes._id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClass;

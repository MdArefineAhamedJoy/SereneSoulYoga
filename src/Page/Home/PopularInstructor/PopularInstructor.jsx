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
  console.log(data)
  return <div></div>;
};

export default PopularInstructor;

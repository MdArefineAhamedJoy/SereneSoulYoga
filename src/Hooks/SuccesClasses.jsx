import React from 'react';
import { useQuery } from "@tanstack/react-query";
const SuccessClasses = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
          fetch("http://localhost:5000/enrollClasses").then((res) => res.json()),
      });
      return[data]
};

export default SuccessClasses;
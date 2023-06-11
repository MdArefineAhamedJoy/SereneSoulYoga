import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from '../Provider/AuthProvider';
const SuccessClasses = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.email)
    const { isLoading, error, data } = useQuery({
        queryKey: ["repoData" , user?.email],
        queryFn: () =>
          fetch(`http://localhost:5000/enrollClasses/${user?.email}`).then((res) => res.json()),
      });
      return[data]
};

export default SuccessClasses;
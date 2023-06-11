import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from '../Provider/AuthProvider';
const usePayment = () => {
    const {user} = useContext(AuthContext)
    const { isLoading, error, data:paymentData } = useQuery({
        queryKey: ["repoData" , user?.email],
        queryFn: () =>
          fetch(`http://localhost:5000/enrollClasses/${user?.email}`).then((res) => res.json()),
      });
      return[paymentData]
};

export default usePayment;
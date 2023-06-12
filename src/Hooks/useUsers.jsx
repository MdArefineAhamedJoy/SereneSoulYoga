
import { useQuery } from "@tanstack/react-query";
const useUsers = () => {
    const { isLoading, error, data:allUser , refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
          fetch("http://localhost:5000/users").then((res) => res.json()),
      });
     return[allUser]    
};

export default useUsers;
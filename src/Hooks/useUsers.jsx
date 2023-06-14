
import { useQuery } from "@tanstack/react-query";
const useUsers = () => {
    const { isLoading, error, data:allUser , refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
          fetch("https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/users").then((res) => res.json()),
      });
     return[allUser]    
};

export default useUsers;
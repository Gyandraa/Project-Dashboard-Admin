import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../service/userClient";

const useUsers = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return {
    users: data ?? null,
    isPending,
    isError,
    error,
  };
};

export default useUsers;

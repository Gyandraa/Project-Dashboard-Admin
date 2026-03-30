import { useQuery } from "@tanstack/react-query";
import { getUsersById } from "../service/userClient";

const useUsersById = (id: number) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["usersById", id],
    queryFn: () => getUsersById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 3,
    refetchOnWindowFocus: false,
  });

  return {
    userById: data ?? null,
    isPending,
    isError,
    error,
  };
};

export default useUsersById;

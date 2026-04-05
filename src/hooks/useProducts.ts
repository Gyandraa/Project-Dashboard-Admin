import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../service/productService";
import type { Products } from "../types/product";

const useProducts = () => {
  const { data, isPending, isError, error } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
    retry: 3,
    refetchOnWindowFocus: false,
  });

  return {
    products: data ?? [],
    isPending,
    isError,
    error,
  };
};

export default useProducts;

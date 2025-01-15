
import useRequest from "@/useRequest";
export function useJsonPlaceholder() {
    const { data, error, isValidating, isLoading, mutate } = useRequest(
      {
        url: "/users",
        method: "GET",
      },
      {
        dedupingInterval: 50000,
      }
    );
  
    return {
      users: data, 
      error,
      isValidating,
      isLoading,
      mutate,
    };
  }
  
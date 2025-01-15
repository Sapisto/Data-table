import useSWR from 'swr';
import apiService from '@/apiService';

export default function useRequest(request, { fallbackData, ...config } = {}) {
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR(
    request,
    () => apiService.request(request),
    {
      ...config,
      fallbackData:
        fallbackData &&
        {
          status: 200,
          statusText: 'InitialData',
          config: request,
          headers: {},
          data: fallbackData,
        },
    }
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    isLoading: !response && !error,
    mutate,
  };
}

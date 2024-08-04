import { QueryClient } from 'react-query';
import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://api.github.com',
});

Axios.interceptors.response.use(response => {
  return response.data;
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retryOnMount: false,
      retry: false,
    },
  },
});

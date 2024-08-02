import { QueryClient } from 'react-query';
import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://api.github.com',
});

export const queryClient = new QueryClient();

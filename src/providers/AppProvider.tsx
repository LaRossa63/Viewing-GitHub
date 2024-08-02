import { QueryClientProvider } from 'react-query';
import { FC, ReactNode } from 'react';
import { queryClient } from '../api';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<IAppProviderProps> = ({ children }) => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </React.StrictMode>
);

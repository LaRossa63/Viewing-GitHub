import { QueryClientProvider } from 'react-query';
import { FC, ReactNode, StrictMode } from 'react';
import { queryClient } from '@/api';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material';
import { ReactQueryDevtools } from 'react-query/devtools';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<IAppProviderProps> = ({ children }) => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {children}

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);

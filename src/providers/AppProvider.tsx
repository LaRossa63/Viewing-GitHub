import { QueryClientProvider } from 'react-query';
import { FC, ReactNode, StrictMode } from 'react';
import { queryClient } from '@/api';
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<IAppProviderProps> = ({ children }) => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);

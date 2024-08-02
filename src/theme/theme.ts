import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,

    h1: {
      fontWeight: '600',
      fontSize: '32px',
      lineHeight: '41.6px',
    },
    h2: {
      fontWeight: '600',
      fontSize: '26px',
      lineHeight: '33.8px',
    },
    h3: {
      fontWeight: '500',
      fontSize: '24px',
      lineHeight: '29.05px',
    },
    h4: {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '21.78px',
    },
    body1: {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '19.36px',
    },
    body2: {
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '21px',
    },
  },
});

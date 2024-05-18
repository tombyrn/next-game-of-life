'use client';
import { Bitter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const bitter = Bitter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: bitter.style.fontFamily,
  },
});

export default theme;

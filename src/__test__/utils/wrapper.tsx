import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import theme from '../../ui/theme';
import { ReactNode } from 'react';

export const WrapperTestUtils = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

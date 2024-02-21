import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './ui/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { CarsContextDataProvider } from './app/contexts/cars.context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CarsContextDataProvider>
        <RouterProvider router={router} />
      </CarsContextDataProvider>
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
);

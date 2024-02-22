import { grey, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: grey[200],
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#f9cc11',
      light: '#fad640',
      dark: '#ae8e0b',
    },
    secondary: {
      main: '#ff9100',
      light: '#ffa733',
      dark: '#b26500',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    info: {
      main: grey['800'],
    },
  },
});

export type Theme = typeof theme;

export default theme;

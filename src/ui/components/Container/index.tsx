import { Container as MUIContainer } from '@mui/material';
import { ReactNode } from 'react';
import AppBar from '../AppBar';
import Snackbar from '../Snackbar';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <MUIContainer
      maxWidth={false}
      disableGutters
      sx={{ width: '100%', margin: 0, minHeight: '100vh', height: 'auto' }}
    >
      <AppBar />
      {children}
      <Snackbar />
    </MUIContainer>
  );
}

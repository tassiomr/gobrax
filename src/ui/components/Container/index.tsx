import { Container as MContainer } from '@mui/material';
import { ReactNode } from 'react';
import AppBar from '../AppBar';
import Snackbar from '../Snackbar';

type ContainerProps = {
  children: ReactNode;
  headerActionComponent?: ReactNode;
};

export default function Container({
  children,
  headerActionComponent,
}: ContainerProps) {
  return (
    <MContainer
      maxWidth={false}
      disableGutters
      sx={{ width: '100%', margin: 0, height: '100vh' }}
    >
      <AppBar actionComponent={headerActionComponent} />
      {children}
      <Snackbar />
    </MContainer>
  );
}

import Container from '../../components/Container';
import Lottie from 'lottie-react';
import notFoundLottie from '../../assets/notFound.lottie.json';
import Logo from '../../assets/logo.svg';
import { Stack } from '@mui/material';

export default function ErrorPage() {
  return (
    <Container>
      <Stack
        sx={{ width: '100%' }}
        justifyContent={'center'}
        alignItems={'center'}
        display="flex"
        mt={8}
      >
        <Lottie
          style={{ width: '50%', height: '50%' }}
          animationData={notFoundLottie}
        />
        <img src={Logo} width={'20%'} height={'20%'} />
      </Stack>
    </Container>
  );
}

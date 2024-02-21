import { Stack } from '@mui/material';
import Lottie from 'lottie-react';
import TruckLoading from '../../assets/truckLoading.lottie.json';
import { Typographies } from '..';
import constants from '../../../app/configs/constants';

type LoadingProps = {
  'data-testid'?: string;
  isVisible: boolean;
};

export default function Loading(props: LoadingProps) {
  if (!props.isVisible) return null;

  return (
    <Stack
      data-testid={props['data-testid']}
      p={8}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Lottie
        animationData={TruckLoading}
        style={{
          width: '40%',
          height: '40%',
        }}
      />
      <Typographies.Title>{constants.components.loading}</Typographies.Title>
    </Stack>
  );
}

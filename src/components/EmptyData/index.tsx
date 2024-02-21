import { Stack } from "@mui/material";
import { Buttons, Typographies } from "..";
import Lottie from "lottie-react";
import NoDataYet from '../../assets/noDate.lottie.json';

type EmptyDataProps = {
  message: string;
  buttonAction: () => void;
  isVisible: boolean
}

export default function EmptyData({
  message,
  isVisible,
  buttonAction
}: EmptyDataProps) {

  if (!isVisible) return null;
  
  return (
    <Stack
      p={4}
      sx={{ width: '100%' }}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={2}
    >
      <Lottie
        style={{
          minWidth: 80,
          minHeight: 80
        }}
        animationData={NoDataYet}
      />
      <Typographies.Title sx={{ textAlign: 'center' }}>
        {message}
      </Typographies.Title>
      <Buttons.AddButton onClick={buttonAction} />
    </Stack>
  )
}
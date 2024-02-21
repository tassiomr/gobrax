import { Typography, TypographyProps } from '@mui/material';
import theme from '../../../theme';

enum Status {
  'warning' = 'warning',
  'info' = 'info',
  'error' = 'error',
  'success' = 'success',
}

type MessageProps = {
  status: keyof typeof Status;
} & TypographyProps;

export default function Message(props: MessageProps) {
  return (
    <Typography
      variant="body1"
      component="p"
      color={theme.palette[props.status].main}
      fontSize={'1em'}
      {...props}
    />
  );
}

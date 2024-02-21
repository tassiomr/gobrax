import { Typography, TypographyProps } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function Description(props: TypographyProps) {
  return (
    <Typography
      variant="subtitle1"
      component="p"
      color={grey[700]}
      {...props}
    />
  );
}

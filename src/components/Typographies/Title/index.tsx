import { Typography, TypographyProps } from '@mui/material';

export default function Title(props: TypographyProps) {
  return <Typography variant="h6" component="h1" {...props} />;
}

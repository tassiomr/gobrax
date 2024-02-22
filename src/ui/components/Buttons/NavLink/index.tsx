import { Link } from 'react-router-dom';
import { Button as MUIButton } from '@mui/material';

type LinkButtonProps = {
  route: string;
  label: string;
  isActive: boolean;
};

type Style = {
  variant: 'text' | 'outlined' | 'contained';
  color: 'success' | 'primary' | 'secondary' | 'warning' | 'info' | 'error';
};

export default function LinkButton({
  route,
  label,
  isActive,
}: LinkButtonProps) {
  const style: Style = isActive
    ? { variant: 'contained', color: 'info' }
    : { variant: 'text', color: 'info' };

  return (
    <MUIButton
      variant={style.variant}
      color={style.color}
      disableElevation
      component={Link}
      to={route}
      fullWidth={true}
      sx={{ minWidth: 200 }}
    >
      {label}
    </MUIButton>
  );
}

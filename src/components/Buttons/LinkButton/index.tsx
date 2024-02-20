import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type LinkButtonProps = {
  route: string,
  label: string,
  isActive: boolean
}

type Style = {
  variant: 'text' | 'outlined' | 'contained',
  color: 'success' | 'primary' | 'secondary' | 'warning' | 'info' | 'error'
}

export default function LinkButton({ route, label, isActive }: LinkButtonProps) {
  const style: Style = isActive ? 
    { variant: 'contained', color: 'secondary' } 
    : { variant: 'text', color: 'secondary' };
  return (
    <Button
      variant={style.variant}
      color={style.color}
      disableElevation
      sx={{ borderRadius: 100, fontWeight: 'bold' }}
      component={Link} to={route}>{label}</Button>
  )
}

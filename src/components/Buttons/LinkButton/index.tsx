import { Link } from "react-router-dom";
import { Button } from "./styles";

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
    { variant: 'contained', color: 'info' } 
    : { variant: 'text', color: 'info' };
  return (
    <Button
      variant={style.variant}
      color={style.color}
      disableElevation
      component={Link} 
      to={route}
    >
      {label}
    </Button>
  )
}

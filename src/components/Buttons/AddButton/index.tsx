import { AddCircle } from "@mui/icons-material";
import { ButtonProps } from "@mui/material";
import { Button } from './styles';

export default function AddButton(props : ButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      startIcon={<AddCircle />}
      {...props}
      >Adicionar</Button>
  )
}

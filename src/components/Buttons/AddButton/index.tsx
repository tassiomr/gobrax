import { AddCircle } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";

type AddButtonProps = {
  text: string;
  onClick: () => void
} & ButtonProps

export default function LinkButton(props : AddButtonProps) {

  return (
    <Button
      variant="outlined"
      color="info"
      disableElevation
      startIcon={<AddCircle />}
      sx={{ borderRadius: 100, fontWeight: 'bold' }}
      {...props}
      >{props.text}</Button>
  )
}

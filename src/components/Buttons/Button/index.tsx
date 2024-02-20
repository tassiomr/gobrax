import { Button, ButtonProps } from "@mui/material";

export default function LinkButton(props: ButtonProps) {
  return (
    <Button
      sx={{ borderRadius: 8, fontWeight: 'bold' }}
      {...props}
      disableElevation
    />
  )
}

import { Button as MUIButton, CircularProgress, ButtonProps as MUIButtonProps, styled} from "@mui/material";

type ButtonProps = {
  isLoading?: boolean
} & MUIButtonProps

const Button = styled(MUIButton)({
  minWidth: 80
})

export default function LinkButton(props: ButtonProps) {
  return (
    <Button
      sx={{ borderRadius: 8, fontWeight: 'bold' }}
      {...props}
      disableElevation
    >{props.isLoading ? <CircularProgress 
        size={20} color='inherit' /> : props.children}</Button>
  )
}

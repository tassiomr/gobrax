import { CircularProgress, ButtonProps as MUIButtonProps } from '@mui/material';
import { Button } from './styles';

type ButtonProps = {
  isLoading?: boolean;
} & MUIButtonProps;

export default function DefaultButton(props: ButtonProps) {
  return (
    <Button {...props} disableElevation>
      {props.isLoading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        props.children
      )}
    </Button>
  );
}

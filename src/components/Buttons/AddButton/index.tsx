import { AddCircle } from '@mui/icons-material';
import { ButtonProps } from '@mui/material';
import { Button } from './styles';
import constants from '../../../configs/constants';

export default function AddButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      startIcon={<AddCircle />}
      {...props}
    >
      {constants.components.buttons.add}
    </Button>
  );
}

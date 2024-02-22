import { ButtonProps } from '@mui/material';
import constants from '../../../../app/configs/constants';
import { Buttons } from '../..';

export default function CancelButton(props: ButtonProps) {
  return (
    <Buttons.Base variant="outlined" color="info" {...props}>
      {constants.components.buttons.cancel}
    </Buttons.Base>
  );
}

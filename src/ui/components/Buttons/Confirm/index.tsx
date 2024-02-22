import { ButtonProps } from '@mui/material';
import constants from '../../../../app/configs/constants';
import { Buttons } from '../..';

export default function Confirm(props: ButtonProps & { isLoading: boolean }) {
  return (
    <Buttons.Base variant="contained" color="info" disableElevation {...props}>
      {constants.components.buttons.confirm}
    </Buttons.Base>
  );
}

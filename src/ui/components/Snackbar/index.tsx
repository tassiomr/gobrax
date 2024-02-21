import { Snackbar as MUISnackbar, Alert } from '@mui/material';
import useSnackbar from '../../../app/hooks/useSnackbar';

export default function Snackbar() {
  const { type, message, isOpen, close } = useSnackbar();

  return (
    <MUISnackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={isOpen}
      autoHideDuration={3500}
      onClose={close}
    >
      <Alert
        onClose={close}
        severity={type}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MUISnackbar>
  );
}

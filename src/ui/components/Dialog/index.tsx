import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Actions } from '..';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type DialogProps = {
  isOpen: boolean;
  cancelAction: () => void;
  confirmAction: () => void;
  isLoading: boolean;
  message: string;
  title: string;
};

export default function AlertDialogSlide({
  isOpen,
  cancelAction,
  isLoading,
  confirmAction,
  message,
  title,
}: DialogProps) {
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={cancelAction}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Actions
            isLoading={isLoading}
            cancelAction={cancelAction}
            confirmAction={confirmAction}
            disabled={isLoading}
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

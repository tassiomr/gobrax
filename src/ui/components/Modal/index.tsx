import {
  Box,
  Modal as MUIModal,
  ModalProps as MUIModalProps,
} from '@mui/material';

type ModalProps = {
  'data-testid'?: string;
} & MUIModalProps;

export default function Modal(props: ModalProps) {
  return (
    <MUIModal {...props}>
      <Box
        width={'100%'}
        maxHeight={'100vh'}
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {props.children}
      </Box>
    </MUIModal>
  );
}

import { Box, Modal as MUIModal, ModalProps as MUIModalProps } from '@mui/material';

type ModalProps = { 
  'data-testid'?: string
} & MUIModalProps;

export default function Modal(props: ModalProps)  {
  return (
    <MUIModal {...props}>
      <Box 
        width={'100%'} 
        height={'100vh'} 
        display={'flex'} 
        justifyContent={'center'} 
        alignItems={'center'}
      >
        {props.children}
      </Box>
    </MUIModal>
  );
}

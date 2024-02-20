import { Box, Modal as MUIModal } from '@mui/material';
import  { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode,
  isOpen: boolean,
  onClose: () => void,
  ariaLabel?: string,
  ariaDescription?: string,
}

export default function Modal({ 
  children, 
  isOpen, 
  onClose,
  ariaLabel,
  ariaDescription
}: ModalProps)  {
  return (
    <MUIModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby={ariaLabel}
      aria-describedby={ariaDescription}
    >
      <Box 
        width={'100%'} 
        height={'100vh'} 
        display={'flex'} 
        justifyContent={'center'} 
        alignItems={'center'}
      >
        {children}
      </Box>
    </MUIModal>
  );
}

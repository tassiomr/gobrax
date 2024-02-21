import { ReactNode, createContext, useState } from 'react';
import { AlertColor } from '@mui/material';

type SnackBarDataType = {
  open: (statusCode: AlertColor, messsage: string) => void;
  message: string;
  type: AlertColor;
  isOpen: boolean;
  close: () => void;
};

export const SnackBarDataContext = createContext({} as SnackBarDataType);

export function SnackBarDataProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<AlertColor>('info');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = (type: AlertColor, message: string) => {
    setType(type);
    setMessage(message);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <SnackBarDataContext.Provider
      value={{
        open,
        type,
        message,
        isOpen,
        close,
      }}
    >
      {children}
    </SnackBarDataContext.Provider>
  );
}

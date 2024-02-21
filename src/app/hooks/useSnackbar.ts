import { useContext } from 'react';
import { SnackBarDataContext } from '../contexts/snackbar.context';

export default function useSnackbar() {
  return useContext(SnackBarDataContext);
}

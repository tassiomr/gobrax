import { useContext } from 'react';
import { DriversContextData } from '../contexts/drivers.context';

export default function useDrivers() {
  return useContext(DriversContextData);
}

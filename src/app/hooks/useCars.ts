import { useContext } from 'react';
import { CarsContextData } from '../contexts/cars.context';

export default function useCars() {
  return useContext(CarsContextData);
}

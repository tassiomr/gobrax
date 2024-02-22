import { ReactNode, createContext, useEffect, useState } from 'react';
import { Car } from '../../domain/models/car.model';
import useSnackbar from '../hooks/useSnackbar';
import create from '../../domain/services/cars/create';
import { AlertColor } from '@mui/material';
import remove from '../../domain/services/cars/remove';
import get from '../../domain/services/cars/get';
import edit from '../../domain/services/cars/edit';

type CarFunction = (car: Car) => Promise<void>;

type CarsContextDataType = {
  addCar: CarFunction;
  deleteCar: CarFunction;
  editCar: CarFunction;
  getCars: () => Promise<void>;
  cars: Car[];
  isAddEditLoading: boolean;
  isLoading: boolean;
};

export const CarsContextData = createContext({} as CarsContextDataType);

export function CarsContextDataProvider({ children }: { children: ReactNode }) {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddEditLoading, setIsAddEditLoading] = useState(false);
  const { open } = useSnackbar();

  const addCar = async (car: Car): Promise<void> => {
    setIsAddEditLoading(true);
    const resp = await create(car);
    open(resp.status as AlertColor, resp.message);
    setIsAddEditLoading(false);
    getCars();
  };

  const deleteCar = async (car: Car): Promise<void> => {
    const resp = await remove(car);
    open(resp.status as AlertColor, resp.message);
    getCars();
  };

  const editCar = async (car: Car): Promise<void> => {
    setIsAddEditLoading(true);
    const resp = await edit(car);
    open(resp.status, resp.message);
    setIsAddEditLoading(false);
    getCars();
  };

  const getCars = async () => {
    setIsLoading(true);
    const resp = await get();
    if (resp.data) setCars(resp.data);

    setIsLoading(false);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <CarsContextData.Provider
      value={{
        cars,
        addCar,
        deleteCar,
        editCar,
        getCars,
        isLoading,
        isAddEditLoading,
      }}
    >
      {children}
    </CarsContextData.Provider>
  );
}

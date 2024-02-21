import { ReactNode, createContext, useEffect, useState } from 'react';
import { Car } from '../../domain/models/car.model';
import useSnackbar from '../hooks/useSnackbar';

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
  const [isLoading, setIsLoading] = useState(false);
  const [isAddEditLoading, setIsAddEditLoading] = useState(false);

  const addCar = async (car: Car): Promise<void> => {
    console.log(car);
  };

  const deleteCar = async (car: Car): Promise<void> => {
    console.log(car);
  };

  const editCar = async (car: Car): Promise<void> => {
    setIsAddEditLoading(true);
    console.log(car);
    setIsAddEditLoading(false);
  };

  const getCars = async () => {
    try {
      setIsLoading(true);
      setCars([
        {
          id: 'fdsfdsfds',
          name: 'Fiat',
          plate: 'ABC-1234',
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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

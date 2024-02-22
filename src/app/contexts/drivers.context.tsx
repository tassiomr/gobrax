import { ReactNode, createContext, useEffect, useState } from 'react';
import { Driver } from '../../domain/models/driver.model';
import useSnackbar from '../hooks/useSnackbar';
import create from '../../domain/services/drivers/create';
import { AlertColor } from '@mui/material';
import remove from '../../domain/services/drivers/remove';
import get from '../../domain/services/drivers/get';
import edit from '../../domain/services/drivers/edit';

type DriverFunction = (driver: Driver) => Promise<void>;

type DriversContextDataType = {
  addDriver: DriverFunction;
  deleteDriver: DriverFunction;
  editDriver: DriverFunction;
  getDrivers: () => Promise<void>;
  selectADriver: (driver: Driver) => void;
  drivers: Driver[];
  isAddEditLoading: boolean;
  isLoading: boolean;
};

export const DriversContextData = createContext({} as DriversContextDataType);

export function DriversContextDataProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddEditLoading, setIsAddEditLoading] = useState(false);
  const { open } = useSnackbar();

  const addDriver = async (driver: Driver): Promise<void> => {
    setIsAddEditLoading(true);
    const resp = await create(driver);
    open(resp.status as AlertColor, resp.message);
    setIsAddEditLoading(false);
  };

  const deleteDriver = async (driver: Driver): Promise<void> => {
    setIsAddEditLoading(true);
    const resp = await remove(driver);
    open(resp.status as AlertColor, resp.message);
    setIsAddEditLoading(false);
  };

  const editDriver = async (driver: Driver): Promise<void> => {
    setIsAddEditLoading(true);
    const resp = await edit(driver);
    open(resp.status, resp.message);
    setIsAddEditLoading(false);
  };

  const getDrivers = async () => {
    setIsLoading(true);
    const resp = await get();
    if (resp.data) setDrivers(resp.data);

    setIsLoading(false);
  };

  const selectADriver = (selectedDriver: Driver) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) => {
        if (driver === selectedDriver) {
          return {
            ...driver,
            isSelected: !driver.isSelected,
          };
        }

        return {
          ...driver,
          isSelected: false,
        };
      }),
    );
  };

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <DriversContextData.Provider
      value={{
        drivers,
        addDriver,
        deleteDriver,
        editDriver,
        getDrivers,
        isLoading,
        isAddEditLoading,
        selectADriver,
      }}
    >
      {children}
    </DriversContextData.Provider>
  );
}

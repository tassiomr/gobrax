import { useState } from 'react';
import constants from '../../../app/configs/constants';
import useForm, { FormType } from '../../../app/hooks/useForm';
import {
  DriverZod,
  DriverSchema,
  Driver,
} from '../../../domain/models/driver.model';

export type DriverConstants = typeof constants.driversPage;
export type DriverFunction = (driver: Driver) => void;

export type UseDataType = {
  data: {
    constants: DriverConstants;
    form: FormType<Driver>;
    drivers: Array<Driver>;
    selectedDriver?: Driver;
  };
  status: {
    canShowTable: boolean;
    isOpenModal: boolean;
    canShowNoDataYet: boolean;
    isLoading: boolean;
    isAddingDriver: boolean;
  };
  actions: {
    changeVisibleModalState: () => void;
    addDriver: DriverFunction;
    deleteDriver: DriverFunction;
    editDriver: DriverFunction;
    selectDriver: DriverFunction;
  };
};

export default function useData(): UseDataType {
  const [isOpenModal, changeVisibleModalState] = useState(false);
  const [isLoading] = useState(false);
  const [isAddingDriver] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState<Driver>();

  const [drivers, setDrivers] = useState<Array<Driver>>([]);

  const form = useForm<Driver, DriverZod>(DriverSchema);

  const canShowTable = !!drivers.length && !isLoading;
  const canShowNoDataYet = drivers.length === 0 && !isLoading;

  const addDriver = (driver: Driver) => {
    console.log(driver);
    setDrivers((state) => {
      const oldState = Object.assign([], state);
      oldState.push({ id: Date.now().toString(), ...driver });

      return oldState;
    });

    form.reset();
    changeVisibleModalState((state) => !state);
  };

  const deleteDriver = (driver: Driver) => {
    setDrivers((state) => state.filter((sDriver) => sDriver.id !== driver.id));
  };

  const editDriver = (driver: Driver) => {
    console.log(driver);
  };

  const selectDriver = (driver: Driver) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((prevDriver) => {
        if (prevDriver.id === driver.id) {
          driver.isSelected = !driver.isSelected;
          if (driver.isSelected) {
            setSelectedDriver(driver);
          } else {
            setSelectedDriver(undefined);
          }
          return driver;
        }

        return { ...prevDriver, isSelected: false };
      }),
    );
  };

  return {
    actions: {
      changeVisibleModalState: () => changeVisibleModalState((state) => !state),
      addDriver,
      deleteDriver,
      editDriver,
      selectDriver,
    },
    status: {
      isOpenModal,
      canShowNoDataYet,
      canShowTable,
      isAddingDriver,
      isLoading,
    },
    data: {
      form,
      constants: constants.driversPage,
      drivers,
      selectedDriver,
    },
  };
}

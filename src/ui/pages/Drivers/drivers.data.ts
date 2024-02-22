import { useState } from 'react';
import constants from '../../../app/configs/constants';
import useForm, { FormType } from '../../../app/hooks/useForm';
import {
  DriverZod,
  DriverSchema,
  Driver,
} from '../../../domain/models/driver.model';
import useDrivers from '../../../app/hooks/useDrivers';

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
    isAddEditLoading: boolean;
    isEdit: boolean;
  };
  actions: {
    changeVisibleModalState: () => void;
    addDriver: DriverFunction;
    deleteDriver: DriverFunction;
    editDriver: DriverFunction;
    selectDriver: DriverFunction;
    handleOpenEditModal: DriverFunction;
    handleCancelAction: () => void;
  };
};

export default function useData(): UseDataType {
  const [isOpenModal, changeVisibleModalState] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState<Driver>();
  const [isEdit, setIsEdit] = useState(true);

  const {
    drivers,
    isLoading,
    isAddEditLoading,
    addDriver,
    deleteDriver,
    editDriver,
  } = useDrivers();

  const form = useForm<Driver, DriverZod>(DriverSchema);

  const canShowTable = !!drivers.length && !isLoading;
  const canShowNoDataYet = drivers.length === 0 && !isLoading;

  const clearStatus = () => {
    form.reset();
    changeVisibleModalState(false);
    setIsEdit(false);
  };

  const handleAddDriver = async (car: Driver) => {
    await addDriver(car);
    clearStatus();
  };

  const handleEditDriver = async (car: Driver) => {
    await editDriver(car);
    clearStatus();
  };

  const handleOpenEditModal = (car: Driver) => {
    setIsEdit(true);
    changeVisibleModalState(true);

    form.setValue('id', car.name);
    form.setValue('name', car.name);
    form.setValue('carId', car.car?.id || '');
  };

  const selectDriver = (driver: Driver) => {
    if (driver.id === selectedDriver?.id) {
      setSelectedDriver(undefined);
    } else {
      setSelectedDriver(driver);
    }
  };

  return {
    actions: {
      changeVisibleModalState: () => changeVisibleModalState((state) => !state),
      addDriver: handleAddDriver,
      deleteDriver,
      editDriver: handleEditDriver,
      selectDriver,
      handleCancelAction: clearStatus,
      handleOpenEditModal,
    },
    status: {
      isOpenModal,
      canShowNoDataYet,
      canShowTable,
      isEdit,
      isLoading,
      isAddEditLoading,
    },
    data: {
      form,
      constants: constants.driversPage,
      drivers,
      selectedDriver,
    },
  };
}

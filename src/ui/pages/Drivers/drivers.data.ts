import { useState } from 'react';
import constants from '../../../app/configs/constants';
import useForm, { FormType } from '../../../app/hooks/useForm';
import {
  DriverZod,
  DriverSchema,
  Driver,
} from '../../../domain/models/driver.model';
import useDrivers from '../../../app/hooks/useDrivers';
import { Car } from '../../../domain/models/car.model';
import useCars from '../../../app/hooks/useCars';

export type DriverConstants = typeof constants.driversPage;
export type DriverFunction = (driver: Driver) => void;

export type UseDataType = {
  data: {
    constants: DriverConstants;
    form: FormType<Driver>;
    drivers: Driver[];
    selectedDriver?: Driver | null;
    driverToDelete?: Driver | null;
    cars: Car[];
  };
  status: {
    canShowTable: boolean;
    isOpenModal: boolean;
    canShowNoDataYet: boolean;
    isLoading: boolean;
    isAddEditLoading: boolean;
    isEdit: boolean;
    isOpenDialog: boolean;
  };
  actions: {
    addDriver: DriverFunction;
    deleteDriver: () => void;
    editDriver: DriverFunction;
    selectDriver: DriverFunction;
    handleOpenEditModal: DriverFunction;
    handleOpenAddModal: () => void;
    handleCancelAction: () => void;
    handleDeleteDialog: (driver?: Driver) => void;
  };
};

export default function useData(): UseDataType {
  const [isOpenModal, changeVisibleModalState] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(true);
  const [driverToDelete, setDriverToDelete] = useState<Driver | null>();

  const {
    drivers,
    isLoading,
    isAddEditLoading,
    addDriver,
    deleteDriver,
    editDriver,
    selectADriver,
  } = useDrivers();

  const { cars } = useCars();

  const form = useForm<Driver, DriverZod>(DriverSchema);

  const canShowTable = !!drivers.length && !isLoading;
  const canShowNoDataYet = drivers.length === 0 && !isLoading;

  const clearStatus = () => {
    form.reset();
    changeVisibleModalState(false);
    setIsEdit(false);
    setIsOpenDialog(false);
    setDriverToDelete(null);
  };

  const handleAddDriver = async (driver: Driver) => {
    const car = cars.find((car) => car.id);
    await addDriver({ ...driver, car });
    clearStatus();
  };

  const handleEditDriver = async (driver: Driver) => {
    const car = cars.find((car) => car.id);
    const carId = car?.id;
    await editDriver({ ...driver, car, carId });
    clearStatus();
  };

  const handleDeleteDriver = async () => {
    await deleteDriver(driverToDelete!);
    clearStatus();
  };

  const handleOpenEditModal = (driver: Driver) => {
    setIsEdit(true);
    changeVisibleModalState(true);

    form.setValue('id', driver.id);
    form.setValue('name', driver.name);
    form.setValue('document', driver.document);
    form.setValue('carId', driver.car?.id || '');
  };

  const selectDriver = (driver: Driver) => {
    selectADriver(driver);
  };

  const handleDeleteDialog = (driver?: Driver) => {
    setDriverToDelete(driver);
    setIsOpenDialog((state) => !state);
  };

  const handleOpenAddModal = () => {
    clearStatus();
    changeVisibleModalState(true);
  };

  return {
    actions: {
      addDriver: handleAddDriver,
      deleteDriver: handleDeleteDriver,
      editDriver: handleEditDriver,
      selectDriver,
      handleCancelAction: clearStatus,
      handleOpenEditModal,
      handleOpenAddModal,
      handleDeleteDialog,
    },
    status: {
      isOpenModal,
      canShowNoDataYet,
      canShowTable,
      isEdit,
      isLoading,
      isAddEditLoading,
      isOpenDialog,
    },
    data: {
      form,
      constants: constants.driversPage,
      drivers,
      selectedDriver: drivers.find((driver) => driver.isSelected),
      driverToDelete,
      cars,
    },
  };
}

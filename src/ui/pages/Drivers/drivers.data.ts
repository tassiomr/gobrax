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
    selectedDriver?: Driver | null;
    driverToDelete?: Driver | null;
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
    changeVisibleModalState: () => void;
    addDriver: DriverFunction;
    deleteDriver: () => void;
    editDriver: DriverFunction;
    selectDriver: DriverFunction;
    handleOpenEditModal: DriverFunction;
    handleCancelAction: () => void;
    handleDeleteDialog: (driver?: Driver) => void;
  };
};

export default function useData(): UseDataType {
  const [isOpenModal, changeVisibleModalState] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>();
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
    await addDriver(driver);
    clearStatus();
  };

  const handleEditDriver = async (driver: Driver) => {
    await editDriver(driver);
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
    if (driver.id === selectedDriver?.id) {
      setSelectedDriver(null);
    } else {
      setSelectedDriver(driver);
    }
  };

  const handleDeleteDialog = (driver?: Driver) => {
    setDriverToDelete(driver);
    setIsOpenDialog((state) => !state);
  };

  return {
    actions: {
      changeVisibleModalState: () => changeVisibleModalState((state) => !state),
      addDriver: handleAddDriver,
      deleteDriver: handleDeleteDriver,
      editDriver: handleEditDriver,
      selectDriver,
      handleCancelAction: clearStatus,
      handleOpenEditModal,
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
      selectedDriver,
      driverToDelete,
    },
  };
}

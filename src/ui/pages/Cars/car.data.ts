import { useState } from 'react';
import constants from '../../../app/configs/constants';
import useForm, { FormType } from '../../../app/hooks/useForm';
import { Car, CarSchema, CarZod } from '../../../domain/models/car.model';
import useCars from '../../../app/hooks/useCars';

export type CarConstants = typeof constants.carsPage;
export type CarFunction = (car: Car) => void;

export type UseDataType = {
  data: {
    constants: CarConstants;
    form: FormType<Car>;
    cars: Array<Car>;
    carToDelete?: Car | null;
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
    handleOpenEditModal: CarFunction;
    addCar: CarFunction;
    deleteCar: () => void;
    editCar: CarFunction;
    handleCancelAction: () => void;
    handleOpenDialog: (car?: Car) => void;
    handleOpenAddModal: () => void;
  };
};

export default function useData(): UseDataType {
  const [isOpenModal, changeVisibleModalState] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [carToDelete, setCarToDelete] = useState<Car | null>(null);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const { cars, addCar, deleteCar, editCar, isLoading, isAddEditLoading } =
    useCars();

  const form = useForm<Car, CarZod>(CarSchema);

  const canShowTable = !!cars.length && !isLoading;
  const canShowNoDataYet = cars.length === 0 && !isLoading;

  const clearStatus = () => {
    form.reset();
    changeVisibleModalState(false);
    setIsEdit(false);
    setIsOpenDialog(false);
    setCarToDelete(null);
  };
  const handleAddCar = async (car: Car) => {
    await addCar(car);
    clearStatus();
  };

  const handleEditCar = async (car: Car) => {
    await editCar(car);
    clearStatus();
  };

  const handleDeleteCar = async () => {
    await deleteCar(carToDelete!);
    clearStatus();
  };

  const handleOpenEditModal = (car: Car) => {
    setIsEdit(true);
    changeVisibleModalState(true);

    form.setValue('id', car.name);
    form.setValue('name', car.name);
    form.setValue('plate', car.plate);
  };

  const handleOpenDialog = (car?: Car) => {
    setCarToDelete(car!);
    setIsOpenDialog((state) => !state);
  };

  const handleOpenAddModal = () => {
    clearStatus();
    changeVisibleModalState(true);
  };

  return {
    actions: {
      changeVisibleModalState: () => changeVisibleModalState((state) => !state),
      handleOpenEditModal,
      addCar: handleAddCar,
      deleteCar: handleDeleteCar,
      editCar: handleEditCar,
      handleCancelAction: clearStatus,
      handleOpenDialog,
      handleOpenAddModal,
    },
    status: {
      isOpenModal,
      canShowNoDataYet,
      canShowTable,
      isAddEditLoading,
      isLoading,
      isEdit,
      isOpenDialog,
    },
    data: {
      form,
      constants: constants.carsPage,
      cars,
      carToDelete,
    },
  };
}

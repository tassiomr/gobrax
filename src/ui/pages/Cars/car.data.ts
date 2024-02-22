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
    handleOpenEditModal: CarFunction;
    addCar: CarFunction;
    deleteCar: CarFunction;
    editCar: CarFunction;
    handleCancelAction: () => void;
  };
};

export default function useData(): UseDataType {
  const [isOpenModal, changeVisibleModalState] = useState(false);
  const [isEdit, setIsEdit] = useState(true);

  const { cars, addCar, deleteCar, editCar, isLoading, isAddEditLoading } =
    useCars();

  const form = useForm<Car, CarZod>(CarSchema);

  const canShowTable = !!cars.length && !isLoading;
  const canShowNoDataYet = cars.length === 0 && !isLoading;

  const clearStatus = () => {
    form.reset();
    changeVisibleModalState(false);
    setIsEdit(false);
  };
  const handleAddCar = async (car: Car) => {
    await addCar(car);
    clearStatus();
  };

  const handleEditCar = async (car: Car) => {
    await editCar(car);
    clearStatus();
  };

  const handleOpenEditModal = (car: Car) => {
    setIsEdit(true);
    changeVisibleModalState(true);

    form.setValue('id', car.name);
    form.setValue('name', car.name);
    form.setValue('plate', car.plate);
  };

  return {
    actions: {
      changeVisibleModalState: () => changeVisibleModalState((state) => !state),
      handleOpenEditModal,
      addCar: handleAddCar,
      deleteCar,
      editCar: handleEditCar,
      handleCancelAction: clearStatus,
    },
    status: {
      isOpenModal,
      canShowNoDataYet,
      canShowTable,
      isAddEditLoading,
      isLoading,
      isEdit,
    },
    data: {
      form,
      constants: constants.carsPage,
      cars,
    },
  };
}

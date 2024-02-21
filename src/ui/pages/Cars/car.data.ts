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
  };
  actions: {
    changeVisibleModalState: () => void;
    addCar: CarFunction;
    deleteCar: CarFunction;
    editCar: CarFunction;
  };
};

export default function useData(): UseDataType {
  const [isOpenModal, changeVisibleModalState] = useState(false);

  const { cars, addCar, deleteCar, editCar, isLoading, isAddEditLoading } =
    useCars();

  const form = useForm<Car, CarZod>(CarSchema);

  const canShowTable = !!cars.length && !isLoading;
  const canShowNoDataYet = cars.length === 0 && !isLoading;

  const handleAddCar = async (car: Car) => {
    await addCar(car);
    changeVisibleModalState(false);
    form.reset();
  };

  return {
    actions: {
      changeVisibleModalState: () => changeVisibleModalState((state) => !state),
      addCar: handleAddCar,
      deleteCar,
      editCar,
    },
    status: {
      isOpenModal,
      canShowNoDataYet,
      canShowTable,
      isAddEditLoading,
      isLoading,
    },
    data: {
      form,
      constants: constants.carsPage,
      cars,
    },
  };
}

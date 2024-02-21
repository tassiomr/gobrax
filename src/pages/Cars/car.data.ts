import { useState } from 'react';
import constants from '../../configs/constants';
import useForm, { FormType } from '../../hooks/useForm';
import { Car, CarSchema, CarZod } from '../../models/car.model';

export type CarConstants = typeof constants.carsPage

export type CarFunction = (car: Car) => void;

export type UseDataType = {
  data: {
    constants: CarConstants,
    form: FormType<Car>,
    cars: Array<Car>,
  },
  status: {
    canShowTable: boolean,
    isOpenModal: boolean;
    canShowNoDataYet: boolean,
    isLoading: boolean,
    isAddingCar: boolean,
  },
  actions: {
    changeVisibleModalState: () => void;
    addCar: CarFunction;
    deleteCar: CarFunction;
    editCar: CarFunction;
  }
}

export default function useData (): UseDataType {
  const [isOpenModal, changeVisibleModalState] = useState(false);
  const [isLoading, _] = useState(false);
  const [isAddingCar, __] = useState(false);

  const [cars, setCars] = useState<Array<Car>>([]);

  const form = useForm<Car, CarZod>(CarSchema);

  const canShowTable = !!cars.length && !isLoading;
  const canShowNoDataYet = (cars.length === 0) && !isLoading;

  const addCar = (car: Car) => {
    setCars(state => {
      const oldState = Object.assign([], state)
      oldState.push({ id: Date.now().toString(), ...car});

      return oldState;
    });

    form.reset();
    changeVisibleModalState(state => !state);
  }

  const deleteCar = (car: Car) => {
    setCars(state => state.filter(sCar => sCar.id !== car.id))
  }

  const editCar = (car: Car) => {
    console.log(car);
  }
 
  return {
    actions: {
      changeVisibleModalState: () => changeVisibleModalState(state => !state),
      addCar,
      deleteCar,
      editCar
    },
    status: {
      isOpenModal,
      canShowNoDataYet,
      canShowTable,
      isAddingCar,
      isLoading
    },
    data: {
      form,
      constants: constants.carsPage,
      cars
    }
  }
}

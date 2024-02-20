import { useState } from "react";
import constants from "../../configs/constants"
import useForm, { Form } from "../../hooks/useForm";
import { Car, CarSchema, CarZod } from "../../models/car.model";

type UseDataType = {
  constants: typeof constants.carsPage;
  isOpen: boolean;
  changeVisibleModalState: () => void
  form: Form<Car>,
  isLoading: boolean,
  cars: Array<Car>,
  addCar: (car: Car) => void;
}

export default function useData (): UseDataType {
  const [isOpen, changeVisibleModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState<Array<Car>>([]);

  const form = useForm<Car, CarZod>(CarSchema);

  const addCar = (car: Car) => {
    setCars(state => {
      const oldState = Object.assign([], state)
      oldState.push(car);

      return oldState;
    });

    changeVisibleModalState(state => !state)
  }
 
  return {
    constants: constants.carsPage,
    isOpen,
    changeVisibleModalState: () => changeVisibleModalState(state => !state),
    form,
    isLoading,
    cars,
    addCar
  }
}

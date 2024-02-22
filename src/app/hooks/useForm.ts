import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  useForm as reactUseForm,
} from 'react-hook-form';

export type FormType<T extends FieldValues> = {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T, T>;
  formState: FormState<T>;
  reset: UseFormReset<T>;
  setValue: UseFormSetValue<T>;
};

export default function useForm<T extends FieldValues, S extends z.ZodType>(
  schema: S,
) {
  const { register, handleSubmit, formState, reset, setValue } =
    reactUseForm<T>({
      resolver: zodResolver(schema),
    });

  return {
    register,
    handleSubmit,
    formState,
    reset,
    setValue,
  };
}

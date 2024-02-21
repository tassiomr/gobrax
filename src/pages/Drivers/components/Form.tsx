import { Box, Stack, Divider } from '@mui/material';
import { DirectionsCarOutlined, SubjectOutlined } from '@mui/icons-material';
import { Typographies, Buttons, TextField } from '../../../components';
import Selector from '../../../components/Select';
import { DriverConstants, DriverFunction } from '../drivers.data';
import { FormType } from '../../../hooks/useForm';
import { Driver } from '../../../models/driver.model';
import { Car } from '../../../models/car.model';

type FormProps = {
  form: FormType<Driver>;
  constants: DriverConstants;
  isAddingCar: boolean;
  addDriver: DriverFunction;
  changeVisibleModalState: () => void;
};

export default function Form({
  form,
  constants,
  isAddingCar,
  addDriver,
  changeVisibleModalState,
}: FormProps) {
  console.log(form.formState.errors);
  return (
    <Stack
      border={'none'}
      borderRadius={2}
      width={'auto'}
      minWidth={'40%'}
      height={'auto'}
      minHeight={'50%'}
      sx={{ background: 'white', padding: 4 }}
    >
      <Stack mb={6}>
        <Typographies.Title>{constants.modal.title}</Typographies.Title>
        <Typographies.Description>
          {constants.modal.description}
        </Typographies.Description>
      </Stack>
      <Stack
        component="form"
        spacing={2}
        justifyContent={'flex-end'}
        direction={'column'}
        onSubmit={form.handleSubmit(addDriver)}
      >
        <Stack spacing={2} justifyContent={'flex-end'} direction={'column'}>
          <TextField
            {...form.register('name')}
            labelText={constants.modal.input.name}
            icon={<DirectionsCarOutlined />}
            error={!!form.formState.errors.name}
            helperText={form.formState.errors.name?.message}
          />
          <TextField
            {...form.register('document')}
            labelText={constants.modal.input.document}
            icon={<SubjectOutlined />}
            error={!!form.formState.errors.document}
            helperText={form.formState.errors.document?.message}
          />
          <Selector
            labelText={constants.modal.input.car}
            options={[]}
            composeObject={(car: Car) => ({
              label: car.name,
              key: car.id!,
              value: car.id!,
            })}
            selectProps={form.register('carId')}
          />
        </Stack>
        <Box component="div" p={1} />
        <Divider />
        <Stack
          direction={'row'}
          justifyContent={'flex-end'}
          useFlexGap
          spacing={2}
        >
          <Buttons.Default
            onClick={changeVisibleModalState}
            variant="outlined"
            color="info"
          >
            {constants.modal.buttons.cancel}
          </Buttons.Default>
          <Buttons.Default
            isLoading={isAddingCar}
            variant="contained"
            color="info"
            // disabled={!form.formState.isDirty || !form.formState.isValid}
            type="submit"
          >
            {constants.modal.buttons.add}
          </Buttons.Default>
        </Stack>
      </Stack>
    </Stack>
  );
}

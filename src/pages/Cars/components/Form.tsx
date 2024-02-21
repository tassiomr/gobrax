import { Box, Stack, Divider } from '@mui/material';
import { DirectionsCarOutlined, SubjectOutlined } from '@mui/icons-material';
import { Typographies, Buttons, TextField } from '../../../components';
import { CarConstants, CarFunction } from '../car.data';
import { FormType } from '../../../hooks/useForm';
import { Car } from '../../../models/car.model';

type FormProps = {
  form: FormType<Car>,
  constants: CarConstants,
  isAddingCar: boolean,
  addCar: CarFunction,
  changeVisibleModalState: () => void
}

export default function Form({
  form,
  constants,
  isAddingCar,
  addCar,
  changeVisibleModalState
}: FormProps) {
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
        <Typographies.Title>
          {constants.modal.title}
        </Typographies.Title>
        <Typographies.Description>
          {constants.modal.description}
        </Typographies.Description>
      </Stack>
      <Stack
        component='form'
        spacing={2}
        justifyContent={'flex-end'}
        direction={'column'}
        onSubmit={form.handleSubmit(addCar)}
      >
        <Stack spacing={2} justifyContent={'flex-end'} direction={'column'}>
          <TextField
            data-testid="input-car-name"
            {...form.register('name')}
            labelText={constants.modal.input.name}
            icon={<DirectionsCarOutlined />}
            error={!!form.formState.errors.name}
            errorText={form.formState.errors.name?.message}
          />
          <TextField
            data-testid="input-car-plate"
            {...form.register('plate')}
            labelText={constants.modal.input.plate}
            icon={<SubjectOutlined />}
            error={!!form.formState.errors.plate}
            errorText={form.formState.errors.plate?.message}
          />
        </Stack>
        <Box component='div' p={1} />
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
            disabled={!form.formState.isDirty || !form.formState.isValid}
            type='submit'
          >
            {constants.modal.buttons.add}
          </Buttons.Default>
        </Stack>
      </Stack>
    </Stack>)
}
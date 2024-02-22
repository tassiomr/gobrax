import { Box, Stack, Divider } from '@mui/material';
import { DirectionsCarOutlined, SubjectOutlined } from '@mui/icons-material';
import {
  Typographies,
  TextField,
  Modal,
  Actions,
  Select,
} from '../../../components';
import { DriverConstants, DriverFunction } from '../drivers.data';
import { FormType } from '../../../../app/hooks/useForm';
import { Driver } from '../../../../domain/models/driver.model';
import { Car } from '../../../../domain/models/car.model';

type FormProps = {
  form: FormType<Driver>;
  constants: DriverConstants;
  isAddEditLoading: boolean;
  isOpenModal: boolean;
  submit: DriverFunction;
  cancelAction: () => void;
  isEdit: boolean;
};

export default function Form({
  form,
  constants,
  isAddEditLoading,
  submit,
  cancelAction,
  isEdit,
  isOpenModal,
}: FormProps) {
  const { add, edit } = constants.modal;
  const title = isEdit ? edit.title : add.title;
  const description = isEdit ? edit.description : add.description;

  return (
    <Modal
      open={isOpenModal}
      onClose={cancelAction}
      aria-describedby={description}
      aria-labelledby={title}
      data-testid={'modal-add-car'}
    >
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
          <Typographies.Title>{title}</Typographies.Title>
          <Typographies.Description>{description}</Typographies.Description>
        </Stack>
        <Stack
          component="form"
          spacing={2}
          justifyContent={'flex-end'}
          direction={'column'}
          onSubmit={form.handleSubmit(submit)}
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
            <Select
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
          <Actions
            isLoading={isAddEditLoading}
            disabled={!form.formState.isDirty || !form.formState.isValid}
            cancelAction={cancelAction}
          />
        </Stack>
      </Stack>
    </Modal>
  );
}

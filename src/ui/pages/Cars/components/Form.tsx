import { Box, Stack, Divider } from '@mui/material';
import { DirectionsCarOutlined, SubjectOutlined } from '@mui/icons-material';
import { Typographies, Buttons, TextField, Modal } from '../../../components';
import { CarConstants, CarFunction } from '../car.data';
import { FormType } from '../../../../app/hooks/useForm';
import { Car } from '../../../../domain/models/car.model';

type FormProps = {
  form: FormType<Car>;
  constants: CarConstants;
  isAddEditLoading: boolean;
  isOpenModal: boolean;
  submit: CarFunction;
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
          <Box component="div" p={1} />
          <Divider />
          <Stack
            direction={'row'}
            justifyContent={'flex-end'}
            useFlexGap
            spacing={2}
          >
            <Buttons.Default
              onClick={cancelAction}
              variant="outlined"
              color="info"
            >
              {constants.modal.buttons.cancel}
            </Buttons.Default>
            <Buttons.Default
              isLoading={isAddEditLoading}
              variant="contained"
              color="info"
              disabled={!form.formState.isDirty || !form.formState.isValid}
              type="submit"
            >
              {constants.modal.buttons.confirm}
            </Buttons.Default>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}

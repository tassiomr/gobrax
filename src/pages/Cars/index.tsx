import { Box, Divider, Stack, TextField as MUITextField } from "@mui/material";
import { Buttons, Container, TextField, Typographies } from "../../components";
import useData from "./car.data";
import Modal from "../../components/Modal";
import { 
  DirectionsCarOutlined, 
  SubjectOutlined  
} from "@mui/icons-material";

export default function Cars() {
  const data = useData();
  const { formState, handleSubmit } = data.form;

  const handle = (data: any) => {
    console.log(data)
  }

  return (
    <Container
      headerActionComponent={
        <Buttons.AddButton
          text={data.constants.headerButton}
          onClick={data.changeVisibleModalState}
        />}
    >
      <Modal 
        isOpen={data.isOpen} 
        onClose={data.changeVisibleModalState}
        ariaDescription={data.constants.modal.description}
        ariaLabel={data.constants.modal.title}
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
          <Typographies.Title>
              {data.constants.modal.title}
            </Typographies.Title>
            <Typographies.Description>
              {data.constants.modal.description}
            </Typographies.Description>
          </Stack>
          <Stack
            component='form'
            spacing={2}
            justifyContent={'flex-end'}
            direction={'column'}
            onSubmit={handleSubmit(handle)}
          >
            <Stack spacing={2} justifyContent={'flex-end'} direction={'column'}>
              <TextField 
                {...data.form.register('name')} 
                labelText={data.constants.modal.input.name} 
                icon={<DirectionsCarOutlined />}
                error={!!data.form.formState.errors.name}
              />
              <TextField 
                {...data.form.register('plate')} 
                labelText={data.constants.modal.input.plate} 
                icon={<SubjectOutlined />}
                error={!!data.form.formState.errors.plate}
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
                onClick={data.changeVisibleModalState} 
                variant="outlined" 
                color="info"
              >
                {data.constants.modal.buttons.cancel}
              </Buttons.Default>
              <Buttons.Default 
                isLoading={data.isLoading}
                variant="contained" 
                color="info"
                disabled={!data.form.formState.isDirty || !data.form.formState.isValid}
                type='submit'
              >
                {data.constants.modal.buttons.add}
              </Buttons.Default>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </Container>
  )
}
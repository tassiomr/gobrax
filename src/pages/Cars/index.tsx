import { Box } from '@mui/material';
import { Buttons, Container, Modal } from '../../components';
import useData from './car.data';
import Form from './components/Form';
import Table from './components/Table';
import EmptyData from '../../components/EmptyData';
import Loading from '../../components/Loading';
import HeaderPage from '../../components/HeaderPage';

export default function Cars() {
  const vm = useData();
  const { status, data, actions } = vm;

  const {
    isOpenModal,
    isLoading,
    canShowNoDataYet,
    canShowTable,
    isAddingCar,
  } = status;
  const { cars, form, constants } = data;
  const { changeVisibleModalState, addCar, deleteCar, editCar } = actions;

  return (
    <Container>
      <Modal
        open={isOpenModal}
        onClose={changeVisibleModalState}
        aria-describedby={constants.modal.description}
        aria-labelledby={constants.modal.title}
        data-testid={'modal-add-car'}
      >
        <Form
          constants={constants}
          form={form}
          isAddingCar={isAddingCar}
          changeVisibleModalState={changeVisibleModalState}
          addCar={addCar}
        />
      </Modal>
      <Loading isVisible={isLoading} />
      {canShowTable ? (
        <Box p={8} sx={{ flex: 1, width: '100%' }}>
          <HeaderPage
            title={vm.data.constants.title}
            rightAction={
              <Buttons.AddButton onClick={vm.actions.changeVisibleModalState} />
            }
          />
          <Table
            editCar={editCar}
            deleteCar={deleteCar}
            cars={cars}
            constants={constants}
          />
        </Box>
      ) : null}
      <EmptyData
        isVisible={canShowNoDataYet}
        message={constants.noDataYet}
        buttonAction={changeVisibleModalState}
      />
    </Container>
  );
}

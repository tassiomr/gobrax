import { Box } from '@mui/material';
import { Buttons, Container } from '../../components';
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
    isAddEditLoading,
    isEdit,
  } = status;
  const { cars, form, constants } = data;
  const {
    changeVisibleModalState,
    addCar,
    deleteCar,
    editCar,
    handleOpenEditModal,
    handleCancelAction,
  } = actions;

  return (
    <Container>
      <Form
        isOpenModal={isOpenModal}
        isEdit={isEdit}
        constants={constants}
        form={form}
        isAddEditLoading={isAddEditLoading}
        cancelAction={handleCancelAction}
        submit={isEdit ? editCar : addCar}
      />
      <Loading isVisible={isLoading} />
      {canShowTable ? (
        <Box p={8} sx={{ flex: 1, width: '100%' }}>
          <HeaderPage
            title={constants.title}
            rightAction={<Buttons.Add onClick={changeVisibleModalState} />}
          />
          <Table
            editCar={handleOpenEditModal}
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

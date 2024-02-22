import { Box } from '@mui/material';
import { Buttons, Container } from '../../components';
import useData from './drivers.data';
import Form from './components/Form';
import Table from './components/Table';
import EmptyData from '../../components/EmptyData';
import Loading from '../../components/Loading';
import HeaderPage from '../../components/HeaderPage';
import SelectedDriver from './components/SelectedDriver';
import Dialog from '../../components/Dialog';

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
    isOpenDialog,
  } = status;
  const { drivers, form, constants, driverToDelete, cars } = data;
  const {
    addDriver,
    deleteDriver,
    editDriver,
    handleOpenEditModal,
    handleCancelAction,
    handleDeleteDialog,
    handleOpenAddModal,
    selectDriver,
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
        submit={isEdit ? editDriver : addDriver}
        cars={cars}
      />
      <Loading isVisible={isLoading} />
      {canShowTable ? (
        <Box p={4} sx={{ flex: 1, width: '100%' }}>
          <SelectedDriver
            driver={drivers.find((driver) => driver.isSelected)}
          />
          <HeaderPage
            title={constants.title}
            rightAction={<Buttons.Add onClick={handleOpenAddModal} />}
          />
          <Table
            editDriver={handleOpenEditModal}
            deleteDriver={handleDeleteDialog}
            drivers={drivers}
            constants={constants}
            selectDriver={selectDriver}
          />
        </Box>
      ) : null}
      <EmptyData
        isVisible={canShowNoDataYet}
        message={constants.noDataYet}
        buttonAction={handleOpenAddModal}
      />
      <Dialog
        isOpen={isOpenDialog}
        cancelAction={handleDeleteDialog}
        confirmAction={deleteDriver}
        title={constants.dialog.title}
        message={constants.dialog.description.replace(
          '$',
          driverToDelete?.name ? driverToDelete.name : '',
        )}
        isLoading={isAddEditLoading}
      />
    </Container>
  );
}

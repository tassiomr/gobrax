import { Box } from '@mui/material';
import { Buttons, Container } from '../../components';
import useData from './drivers.data';
import Form from './components/Form';
import Table from './components/Table';
import EmptyData from '../../components/EmptyData';
import Loading from '../../components/Loading';
import HeaderPage from '../../components/HeaderPage';
import SelectedDriver from './components/SelectedDriver';

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
  const { drivers, form, constants, selectedDriver } = data;
  const {
    changeVisibleModalState,
    addDriver,
    deleteDriver,
    editDriver,
    handleOpenEditModal,
    handleCancelAction,
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
      />
      <Loading isVisible={isLoading} />
      {canShowTable ? (
        <Box p={8} sx={{ flex: 1, width: '100%' }}>
          <SelectedDriver driver={selectedDriver} />
          <HeaderPage
            title={constants.title}
            rightAction={<Buttons.Add onClick={changeVisibleModalState} />}
          />
          <Table
            editDriver={handleOpenEditModal}
            deleteDriver={deleteDriver}
            drivers={drivers}
            constants={constants}
            selectDriver={selectDriver}
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

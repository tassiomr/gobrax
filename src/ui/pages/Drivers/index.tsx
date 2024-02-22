import { Box } from '@mui/material';
import { Buttons, Container, Modal } from '../../components';
import useData from './drivers.data';
import Form from './components/Form';
import Table from './components/Table';
import EmptyData from '../../components/EmptyData';
import Loading from '../../components/Loading';
import HeaderPage from '../../components/HeaderPage';
import SelectedDriver from './components/SelectedDriver';

export default function Drivers() {
  const vm = useData();
  const { status, data, actions } = vm;

  const {
    isOpenModal,
    isLoading,
    canShowNoDataYet,
    canShowTable,
    isAddingDriver,
  } = status;
  const { drivers, form, constants, selectedDriver } = data;
  const {
    changeVisibleModalState,
    addDriver,
    deleteDriver,
    editDriver,
    selectDriver,
  } = actions;

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
          isAddingCar={isAddingDriver}
          changeVisibleModalState={changeVisibleModalState}
          addDriver={addDriver}
        />
      </Modal>
      <Loading isVisible={isLoading} />
      {canShowTable ? (
        <Box p={8} sx={{ flex: 1, width: '100%' }}>
          <SelectedDriver driver={selectedDriver} />
          <HeaderPage
            title={vm.data.constants.title}
            rightAction={
              <Buttons.Add onClick={vm.actions.changeVisibleModalState} />
            }
          />
          <Table
            editDriver={editDriver}
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

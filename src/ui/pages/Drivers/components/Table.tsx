import { TableRow, TableCell, Checkbox } from '@mui/material';
import { DeleteOutlineOutlined, EditOutlined } from '@mui/icons-material';
import { Table } from '../../../components';
import { Driver } from '../../../../domain/models/driver.model';
import { DriverFunction, DriverConstants } from '../drivers.data';
import theme from '../../../theme';

type TableProps = {
  constants: DriverConstants;
  drivers: Array<Driver>;
  editDriver: DriverFunction;
  deleteDriver: DriverFunction;
  selectDriver: DriverFunction;
};

const iconStyle = {
  color: theme.palette.primary.main,
  ':hover': { opacity: 0.5 },
};

export default function TableDriver({
  constants,
  drivers,
  editDriver,
  deleteDriver,
  selectDriver,
}: TableProps) {
  return (
    <Table
      ariaLabel="Tabela de motoristas"
      headers={constants.table.headers}
      data={drivers}
      renderCell={(item) => {
        const driver = item as Driver;
        console.log(driver);
        return (
          <TableRow
            key={driver.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              <Checkbox
                key={driver.id}
                checked={driver.isSelected}
                onChange={() => {
                  selectDriver(driver);
                }}
              />
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {driver.id}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {driver.name}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {driver.document}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {driver.car?.id
                ? constants.table.vinculed.yes
                : constants.table.vinculed.no}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              <DeleteOutlineOutlined
                onClick={() => deleteDriver(driver)}
                sx={iconStyle}
                aria-label="Deletar veículo"
              />
              <EditOutlined
                onClick={() => editDriver(driver)}
                sx={iconStyle}
                aria-label="Editar veículo"
              />
            </TableCell>
          </TableRow>
        );
      }}
    />
  );
}

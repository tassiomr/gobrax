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
      renderCell={(item: Driver) => {
        return (
          <TableRow
            key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              <Checkbox
                checked={item.isSelected}
                onChange={() => {
                  selectDriver(item);
                }}
              />
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {item.id}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {item.name}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {item.document}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {item.carId
                ? constants.table.vinculed.yes
                : constants.table.vinculed.no}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              <DeleteOutlineOutlined
                onClick={() => deleteDriver(item)}
                sx={iconStyle}
                aria-label="Deletar veículo"
              />
              <EditOutlined
                onClick={() => editDriver(item)}
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

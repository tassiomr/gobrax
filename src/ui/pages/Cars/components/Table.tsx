import { TableRow, TableCell } from '@mui/material';
import { DeleteOutlineOutlined, EditOutlined } from '@mui/icons-material';
import { Table } from '../../../components';
import { Car } from '../../../../domain/models/car.model';
import { CarConstants, CarFunction } from '../car.data';
import theme from '../../../theme';

type TableProps = {
  constants: CarConstants;
  cars: Array<Car>;
  editCar: CarFunction;
  deleteCar: CarFunction;
};

const iconStyle = {
  color: theme.palette.primary.main,
  ':hover': { opacity: 0.5 },
};

export default function TableCar({
  constants,
  cars,
  editCar,
  deleteCar,
}: TableProps) {
  return (
    <Table
      ariaLabel="Tabela de veículos"
      headers={constants.table.headers}
      data={cars}
      renderCell={(item) => {
        const car = item as Car;
        return (
          <TableRow
            key={car.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              {car.id}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {car.name}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              {car.plate}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
              <DeleteOutlineOutlined
                onClick={() => deleteCar(car)}
                sx={iconStyle}
                aria-label="Deletar veículo"
              />
              <EditOutlined
                onClick={() => editCar(car)}
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

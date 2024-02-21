import { TableRow, TableCell } from '@mui/material';
import { DeleteOutlineOutlined, EditOutlined } from '@mui/icons-material';
import { Table } from '../../../components';
import { Car } from '../../../models/car.model';
import { CarConstants, CarFunction } from '../car.data';
import theme from '../../../theme';

type TableProps = {
  constants: CarConstants,
  cars: Array<Car>,
  editCar: CarFunction,
  deleteCar: CarFunction
}

const iconStyle = {
  color: theme.palette.primary.main,
  ":hover": { opacity: 0.5 }
}

export default function TableCar({
  constants,
  cars,
  editCar,
  deleteCar
}: TableProps) {
  return (
    <Table
      ariaLabel="Tabela de veículos"
      headers={constants.table.headers}
      data={cars}
      renderCell={(item: Car) => {
        return (
          <TableRow
            key={item.plate}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">{item.id}</TableCell>
            <TableCell align="center" component="th" scope="row">{item.name}</TableCell>
            <TableCell align="center" component="th" scope="row">{item.plate}</TableCell>
            <TableCell align="center" component="th" scope="row">
              <DeleteOutlineOutlined
                onClick={() => deleteCar(item)}
                sx={iconStyle}
                aria-label="Deletar veículo"
              />
              <EditOutlined
                onClick={() => editCar(item)}
                sx={iconStyle}
                aria-label="Editar veículo"
              />
            </TableCell>
          </TableRow>
        )
      }}
    />)
}
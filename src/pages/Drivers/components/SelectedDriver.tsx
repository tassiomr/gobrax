import { Stack, Box } from '@mui/material';
import { Car } from '../../../models/car.model';
import { Driver } from '../../../models/driver.model';
import { Typographies } from '../../../components';

type SelectedDriverProps = {
  driver?: Driver;
  car?: Car;
};

export default function SelectedDriver({ driver, car }: SelectedDriverProps) {
  if (!driver) return null;

  return (
    <Stack pb={2} width={'100%'}>
      <Box>
        <Typographies.Message status="info">
          <strong>Nome:</strong> {driver.name}
        </Typographies.Message>
        <Typographies.Message status="info">
          <strong>Documento:</strong> {driver.document}
        </Typographies.Message>
        <Typographies.Message status="info">
          <strong>Veículo: </strong> {car?.name ? car.name : '-'}
        </Typographies.Message>
      </Box>
    </Stack>
  );
}

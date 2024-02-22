import { Stack, Box } from '@mui/material';
import { Driver } from '../../../../domain/models/driver.model';
import { Typographies } from '../../../components';

type SelectedDriverProps = {
  driver?: Driver | null;
};

export default function SelectedDriver({ driver }: SelectedDriverProps) {
  if (!driver) return null;

  const formatCarName = () => {
    if (driver.car?.name && driver.car?.plate) {
      return `${driver.car.name} - ${driver.car?.plate}`;
    }

    return '-';
  };
  return (
    <Stack pb={2} width={'100%'}>
      <Box>
        <Typographies.Message status="info">Selecionado:</Typographies.Message>
        <Typographies.Message status="info">
          <strong>Nome:</strong> {driver.name}
        </Typographies.Message>
        <Typographies.Message status="info">
          <strong>Veículo: </strong> {formatCarName()}
        </Typographies.Message>
      </Box>
    </Stack>
  );
}

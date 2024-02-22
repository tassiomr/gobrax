import { Car } from '../../models/car.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';

export default async function get(): Promise<ReturnFunction<Car[]>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return formatBackendData<Car[]>(200, 'Veículo atualizado com sucesso!', [
      {
        id: 'a809808080991',
        name: 'Fiat',
        plate: 'ABC-1234',
      },
      {
        id: 'b809808080990',
        name: 'Fiat',
        plate: 'ABC-1234',
      },
      {
        id: '8a09808080992',
        name: 'Fiat',
        plate: 'ABC-1234',
      },
      {
        id: '80a9808080993',
        name: 'Fiat',
        plate: 'ABC-1234',
      },
    ]);
  } catch (error: any) {
    return formatBackendData(error?.statusCode || 500, error?.message);
  }
}

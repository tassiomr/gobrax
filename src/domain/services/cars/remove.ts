import { Car } from '../../models/car.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';

export default async function remove(car: Car): Promise<ReturnFunction> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return formatBackendData(200, 'Veículo deletado com sucesso!', car);
  } catch (error: any) {
    return formatBackendData(error?.statusCode || 500, error?.message);
  }
}

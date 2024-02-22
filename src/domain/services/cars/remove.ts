import { Car } from '../../models/car.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';
import api from '../network/client';

export default async function remove(car: Car): Promise<ReturnFunction> {
  try {
    await api.delete(`/cars/${car.id}`);
    return formatBackendData(200, 'Veículo deletado com sucesso!', car);
  } catch (error) {
    const err = error as { statusCode: number; message: string };
    return formatBackendData(err?.statusCode || 500, err?.message);
  }
}

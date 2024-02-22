import { Car } from '../../models/car.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';
import api from '../network/client';

export default async function edit(car: Car): Promise<ReturnFunction> {
  try {
    await api.put('/cars', car);
    return formatBackendData(200, 'Veículo atualizado com sucesso!');
  } catch (error) {
    const err = error as { statusCode: number; message: string };
    return formatBackendData(err?.statusCode || 500, err?.message);
  }
}

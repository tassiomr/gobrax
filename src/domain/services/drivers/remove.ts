import { Driver } from '../../models/driver.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';
import api from '../network/client';

export default async function remove(driver: Driver): Promise<ReturnFunction> {
  try {
    await api.delete(`/drivers/${driver.id}`);
    return formatBackendData(200, 'Veículo deletado com sucesso!');
  } catch (error) {
    const err = error as { statusCode: number; message: string };
    return formatBackendData(err?.statusCode || 500, err?.message);
  }
}

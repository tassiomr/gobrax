import { Driver } from '../../models/driver.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';
import api from '../network/client';

export default async function create(driver: Driver): Promise<ReturnFunction> {
  try {
    await api.post('/drivers', driver);
    return formatBackendData(200, 'Veículo adicionado com sucesso!', driver);
  } catch (error) {
    const err = error as { statusCode: number; message: string };
    return formatBackendData(err?.statusCode || 500, err?.message);
  }
}

import { Driver } from '../../models/driver.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';
import api from '../network/client';

export default async function edit(driver: Driver): Promise<ReturnFunction> {
  try {
    await api.put(`/drivers/${driver.id}`, driver);
    return formatBackendData(200, 'Motorista atualizado com sucesso!');
  } catch (error) {
    const err = error as { statusCode: number; message: string };
    return formatBackendData(err?.statusCode || 500, err?.message);
  }
}

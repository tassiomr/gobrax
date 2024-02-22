import { Driver } from '../../models/driver.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';

export default async function edit(driver: Driver): Promise<ReturnFunction> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return formatBackendData(200, 'Motorista atualizado com sucesso!', driver);
  } catch (error) {
    const err = error as { statusCode: number; message: string };
    return formatBackendData(err?.statusCode || 500, err?.message);
  }
}

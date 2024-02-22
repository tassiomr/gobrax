import { Driver } from '../../models/driver.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';

export default async function remove(driver: Driver): Promise<ReturnFunction> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return formatBackendData(200, 'Veículo deletado com sucesso!', driver);
  } catch (error: any) {
    return formatBackendData(error?.statusCode || 500, error?.message);
  }
}

import { Driver } from '../../models/driver.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';
import api from '../network/client';

export default async function get(): Promise<ReturnFunction<Driver[]>> {
  try {
    const resp = await api.get('/drivers');
    return formatBackendData<Driver[]>(200, '', resp.data);
  } catch (error) {
    const err = error as { statusCode: number; message: string };
    return formatBackendData(err?.statusCode || 500, err?.message);
  }
}

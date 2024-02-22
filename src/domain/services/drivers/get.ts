import { Driver } from '../../models/driver.model';
import { ReturnFunction } from '../../types/network';
import formatBackendData from '../data';

export default async function get(): Promise<ReturnFunction<Driver[]>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return formatBackendData<Driver[]>(200, '', [
      {
        id: '001',
        name: 'João da Silva',
        document: '123.456.789-00',
        car: {
          id: '001',
          name: 'Chevrolet',
          plate: 'ABC-1234',
        },
      },
      {
        id: '002',
        name: 'Maria Oliveira',
        document: '987.654.321-00',
      },
      {
        id: '003',
        name: 'Pedro Santos',
        document: '456.789.123-00',
        car: {
          id: '002',
          name: 'Ford',
          plate: 'DEF-5678',
        },
      },
      {
        id: '004',
        name: 'Ana Souza',
        document: '111.222.333-44',
        car: {
          id: '003',
          name: 'Volkswagen',
          plate: 'GHI-9012',
        },
      },
      {
        id: '005',
        name: 'Carlos Silva',
        document: '555.666.777-88',
      },
    ]);
  } catch (error) {
    const err = error as { statusCode: number; message: string };
    return formatBackendData(err?.statusCode || 500, err?.message);
  }
}
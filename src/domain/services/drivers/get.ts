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
          marca: 'Chevrolet',
          placa: 'ABC-1234',
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
          marca: 'Ford',
          placa: 'DEF-5678',
        },
      },
      {
        id: '004',
        name: 'Ana Souza',
        document: '111.222.333-44',
        car: {
          id: '003',
          marca: 'Volkswagen',
          placa: 'GHI-9012',
        },
      },
      {
        id: '005',
        name: 'Carlos Silva',
        document: '555.666.777-88',
      },
    ]);
  } catch (error: any) {
    return formatBackendData(error?.statusCode || 500, error?.message);
  }
}

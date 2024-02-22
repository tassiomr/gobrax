import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Table from '.';
import { Car } from '../../../domain/models/car.model';

describe('Table Component Test Suit', () => {
  const data = [
    { id: 1, marca: 'Volkswagen', plate: 'cde-5678' },
    { id: 2, marca: 'Fiat', plate: 'abc-1234' },
  ];
  const headers = ['ID', 'Marca', 'Placa'];

  it('renders table headers correctly', () => {
    render(
      <Table
        data={data}
        headers={headers}
        renderCell={() => null}
        ariaLabel="Table"
      />,
    );
    headers.forEach((header) => {
      const tableHeader = screen.getByText(header);
      expect(tableHeader).toBeInTheDocument();
    });
  });

  it('renders table rows correctly', () => {
    render(
      <Table
        data={data}
        headers={headers}
        renderCell={(item: Car) => (
          <tr key={item?.id}>
            <td>{item?.id}</td>
            <td>{item?.name}</td>
            <td>{item?.plate}</td>
          </tr>
        )}
        ariaLabel="Table"
      />,
    );
    data.forEach((item) => {
      const tableRow = screen.getByText(item.marca);
      expect(tableRow).toBeInTheDocument();
    });
  });
});

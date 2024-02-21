import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest'
import LinkButton from '.';
import { BrowserRouter } from 'react-router-dom';

describe.only('LinkButton Component Test Suit', () => {
  it('renders button with correct label', () => {
    render(<LinkButton route="/cars" label="Veículos" isActive={false} />, {
      wrapper: BrowserRouter
    });

    const button = screen.getByText(/Veículos/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/cars');
    expect(button).toHaveStyle(`
      background-color: rgba(2, 136, 209, 0.04);
      color: rgb(2, 136, 209);
      font-weight: bold;
    `)
  });

  it('renders button with correct variant and color when isActive is false', () => {
    render(<LinkButton route="/drivers" label="Motoristas" isActive={true} />, {
      wrapper: BrowserRouter
    });

    const button = screen.getByText(/Motoristas/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/drivers');

    expect(button).toHaveStyle(`
      background-color: rgb(1, 87, 155);
      color: rgb(255, 255, 255);
      font-weight: bold;
    `)
  });
});

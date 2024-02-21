import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import Container from '.';
import { WrapperTestUtils } from '../../__test__/utils/wrapper';

describe('Container Component Test Suit', () => {
  beforeEach(() => {
    const button = <button data-testid="header-action">action</button>;

    render(
      <Container headerActionComponent={button}>
        <div data-testid="children"></div>
      </Container>, 
      { wrapper: WrapperTestUtils }
    )
  })

  afterAll(() =>  { 
    cleanup() 
  })

  it('renders children correctly', () => {
    const childComponent = screen.getByTestId('children');
    expect(childComponent).toBeInTheDocument();
  });

  it('renders header action component correctly', () => {
    const actionComponent = screen.getByTestId('header-action');
    expect(actionComponent).toBeInTheDocument();
  });

  it('renders header navigation component correctly',  () => {
    const driversButton = screen.getByText(/Motoristas/i);
    const carsButton = screen.getByText(/Veículos/i);

    expect(driversButton).not.toBeNull();
    expect(carsButton).not.toBeNull();
  });

  it('renders header logo component correctly', () => {
    const logo = screen.getByAltText('Logo da aplicação');
    expect(logo).toBeInTheDocument()
  });
});

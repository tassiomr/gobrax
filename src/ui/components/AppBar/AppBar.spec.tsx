import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import { WrapperTestUtils } from '../../../__test__/utils/wrapper';
import Bar from '.';

describe('Bar Component Test Suit', () => {
  beforeEach(() => {
    render(<Bar />, {
      wrapper: WrapperTestUtils,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('correctly renders navigation buttons', () => {
    const driversButton = screen.getByText(/Motoristas/i);
    const carsButton = screen.getByText(/Veículos/i);

    expect(driversButton).not.toBeNull();
    expect(carsButton).not.toBeNull();
  });

  it('correctly renders the logo', () => {
    const logo = screen.getByAltText('Logo da aplicação');
    expect(logo).toBeInTheDocument();
  });
});

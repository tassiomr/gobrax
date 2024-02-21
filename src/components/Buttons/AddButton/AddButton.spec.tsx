import { cleanup, render, screen } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import AddButton from '.';
import { WrapperTestUtils } from '../../../__test__/utils/wrapper';

describe('AddButton Component Tests', () => {
  beforeEach(() => {
    render(<AddButton />, { wrapper: WrapperTestUtils });
  });

  afterAll(() => {
    cleanup();
  });

  it('renders button with correct text', () => {
    const button = screen.getByText('Adicionar');
    expect(button).toBeInTheDocument();
  });

  it('renders button with start icon', () => {
    const icon = screen.getByTestId('AddCircleIcon');
    expect(icon).toBeInTheDocument();
  });

  it('renders button with correct styles', () => {
    const button = screen.getByText('Adicionar');
    expect(button).toHaveStyle({
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: 'rgb(174, 142, 11)',
      fontWeight: 'bold',
    });
  });
});

import { cleanup, render, screen } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import Confirm from '.';
import { WrapperTestUtils } from '../../../../__test__/utils/wrapper';

describe('Confirm Button Component Suit Test', () => {
  beforeEach(() => {
    render(<Confirm />, { wrapper: WrapperTestUtils });
  });

  afterAll(() => {
    cleanup();
  });

  it('renders button with correct text', () => {
    const button = screen.getByText('Confirmar');
    expect(button).toBeInTheDocument();
  });

  it('renders button with start icon', () => {
    const icon = screen.getByTestId('AddCircleIcon');
    expect(icon).toBeInTheDocument();
  });

  it('renders button with correct styles', () => {
    const button = screen.getByText('Confirmar');
    expect(button).toHaveStyle({
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: 'rgb(174, 142, 11)',
      fontWeight: 'bold',
    });
  });
});

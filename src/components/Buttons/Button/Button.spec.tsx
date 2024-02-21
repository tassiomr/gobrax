import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import DefaultButton from '.';

describe('DefaultButton Component', () => {
  it('renders button with children when not loading', () => {
    render(<DefaultButton>Remover</DefaultButton>);
    const button = screen.getByRole('button', { name: /Remover/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Remover/i)
  });

  it('renders CircularProgress when loading', () => {
    render(<DefaultButton isLoading />);
    const circularProgress = screen.getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import HeaderPage from '.';
import { expect } from 'vitest';

describe('HeaderPage Component Test Suit', () => {
  it('should render title correctly', () => {
    const title = 'Veículos';
    render(<HeaderPage title={title} />);
    
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render rightAction correctly', () => {
    const mockRightAction = <button>Button</button>;
    render(<HeaderPage title="Veículos" rightAction={mockRightAction} />);
    
    const rightActionElement = screen.getByText(/Button/i);
    expect(rightActionElement).toBeInTheDocument();
  });
});

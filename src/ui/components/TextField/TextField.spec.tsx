import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InputText from '.';

describe('InputText Component', () => {
  it('renders label correctly', () => {
    render(<InputText labelText="Username" />);
    const label = screen.getByText('Username');
    expect(label).toBeInTheDocument();
  });

  it('renders error text correctly when provided', () => {
    render(<InputText labelText="Username" errorText="Required field" />);
    const errorText = screen.getByText('Required field');
    expect(errorText).toBeInTheDocument();
  });

  it('renders icon correctly when provided', () => {
    const icon = <div data-testid="icon">Icon</div>;
    render(<InputText labelText="Username" icon={icon} />);
    const renderedIcon = screen.getByTestId('icon');
    expect(renderedIcon).toBeInTheDocument();
  });
});

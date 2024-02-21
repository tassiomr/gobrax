import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Message from '.';

describe('Message Component Test Suit', () => {
  it('renders with status info', () => {
    const text = 'Info Message'
    render(<Message status="info">{text}</Message>);

    const message = screen.getByText(text);
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle({ 
      color: 'rgb(66, 66, 66)' 
    });
  });

  it('renders with status error', () => {
    const text = 'Error Message'
    render(<Message status="error">{text}</Message>);

    const message = screen.getByText(text);
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle({ 
      color: 'rgb(255, 23, 68)' 
    });
  });

  it('renders with status success', () => {
    const text = 'Success Message'
    render(<Message status="success">{text}</Message>);

    const message = screen.getByText(text);
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle({ 
      color: 'rgb(46, 125, 50)' 
    });
  });

  it('renders with status warning', () => {
    const text = 'Warning Message'
    render(<Message status="warning">{text}</Message>);

    const message = screen.getByText(text);
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle({ 
      color: 'rgb(237, 108, 2)'
    });
  });

  it('render with fontSize correctly', () => {
    const text = 'FontSize Message'
    render(<Message status="success">{text}</Message>);

    const message = screen.getByText(text);
    expect(message).toHaveStyle({ fontSize: '0.8em', color: 'rgb(46, 125, 50)' });
  });
});

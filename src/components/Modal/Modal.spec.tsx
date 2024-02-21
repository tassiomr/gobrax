import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Modal from '.';

describe('Modal Component', () => {
  it('renders modal content when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toBeInTheDocument();
  });

  it('does not render modal content when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    const modalContent = screen.queryByTestId('modal-content');
    expect(modalContent).not.toBeInTheDocument();
  });
});

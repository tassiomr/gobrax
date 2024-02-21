import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import EmptyData from '.';
import constants from '../../../app/configs/constants';

describe('EmptyData Component Test Suit', () => {
  it('should render message and button correctly', () => {
    const message = 'No data available yet';
    render(
      <EmptyData isVisible={true} message={message} buttonAction={() => {}} />,
    );

    const messageElement = screen.getByText(message);
    const buttonElement = screen.getByText(constants.components.buttons.add);

    expect(messageElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should not render anything when isVisible is false', () => {
    render(
      <EmptyData
        isVisible={false}
        message="No data available yet"
        buttonAction={() => {}}
      />,
    );

    const emptyDataElement = screen.queryByRole('button', { name: /add/i });

    expect(emptyDataElement).not.toBeInTheDocument();
  });
});

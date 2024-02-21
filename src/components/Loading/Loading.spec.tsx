import { render, screen } from "@testing-library/react";
import Loading from ".";
import { expect } from "vitest";
import constants from "../../configs/constants";

describe('Loading Component Test Suit', () => {
  it('should render loading component when isVisible is true', () => {
    render(<Loading isVisible={true} data-testid="lottie-animation" />);
    
    const lottieElement = screen.getByTestId('lottie-animation');
    const loadingTextElement = screen.getByText(constants.components.loading);

    expect(lottieElement).toBeInTheDocument();
    expect(loadingTextElement).toBeInTheDocument();
  });

  it('should not render loading component when isVisible is false', () => {
    render(<Loading isVisible={false} data-testid='lottie-animation' />);
    
    const lottieElement = screen.queryByTestId('lottie-animation');
    const loadingTextElement = screen.queryByText(constants.components.loading);
    
    expect(lottieElement).not.toBeInTheDocument();
    expect(loadingTextElement).not.toBeInTheDocument();
  });
});

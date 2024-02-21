import { cleanup, render, screen } from '@testing-library/react';
import { expect, it, describe, afterAll } from 'vitest';
import Title from '.';
import { WrapperTestUtils } from '../../../__test__/utils/wrapper';

const text = 'Testing Description';

describe('Typography Description Test Suit', () => {
  beforeEach(() => {
    render(<Title>{text}</Title>, { wrapper: WrapperTestUtils });
  });
  afterAll(() => {
    cleanup();
  });

  it('renders with the correct variant and component', () => {
    const title = screen.getByText(text);

    expect(title).toHaveTextContent(text);
    expect(title).toHaveStyle(`
      font-size: 1rem;
      font-weight: 400;
    `);
  });
});

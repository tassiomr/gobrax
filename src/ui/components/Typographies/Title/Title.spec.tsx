import { cleanup, render, screen } from '@testing-library/react';
import { expect, it, describe, afterAll } from 'vitest';
import Title from '.';
import { WrapperTestUtils } from '../../../../__test__/utils/wrapper';

describe('Typography Title Test Suit', () => {
  beforeEach(() => {
    render(<Title>Testing Title</Title>, { wrapper: WrapperTestUtils });
  });
  afterAll(() => {
    cleanup();
  });

  it('renders with the correct variant and component', () => {
    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toHaveTextContent('Testing Title');
    expect(title).toHaveStyle(`
      font-size: 1.25rem;
      font-weight: 500;
    `);
  });
});

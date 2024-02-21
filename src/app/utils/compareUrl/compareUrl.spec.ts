import { describe, it, expect } from 'vitest';

import compareUrl from '.';

describe('Testing compare URL component', () => {
  it('Should return true if the given route matches the path', () => {
    const route = 'drivers';
    const path = '/drivers';

    expect(compareUrl(route, path)).toBeTruthy();
  });

  it('Should return false if the given route does not match the path', () => {
    const route = 'drivers';
    const path = '/cars';

    expect(compareUrl(route, path)).toBeFalsy();
  });
});

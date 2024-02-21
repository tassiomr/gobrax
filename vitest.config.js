import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./vitest-setup.js'],
    environment: 'jsdom',
    coverage: {
      enabled: true,
      provider: 'istanbul',
    },
  }
});

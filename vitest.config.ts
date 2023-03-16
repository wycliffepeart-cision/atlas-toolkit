import { defineConfig } from 'vitest/config';
import { svgLoader } from './loaders/svg-loader';

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8', // or 'c8'
    },
  },
  plugins: [svgLoader()],
});

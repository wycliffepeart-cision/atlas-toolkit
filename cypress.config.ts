import { defineConfig } from 'cypress';

export default defineConfig({
  includeShadowDom: true,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});

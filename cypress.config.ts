import { defineConfig } from 'cypress';

export default defineConfig({
  includeShadowDom: true,
  component: {
    specPattern: 'tests/inte/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});

import { defineConfig } from 'cypress';

export default defineConfig({
	viewportWidth: 1100,
	viewportHeight: 860,
	component: {
		specPattern: 'tests/inte/**/*.cy.{js,jsx,ts,tsx}',
		devServer: {
			framework: 'react',
			bundler: 'webpack',
		},
	},
});

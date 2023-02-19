import type { StorybookConfig } from '@storybook/react-webpack5';
import {options} from '../stoybook.config'
const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-docs'
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  ...options.main()
};
export default config;
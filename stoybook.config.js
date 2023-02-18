import {create} from '@storybook/theming';

export const options = {

  main: () => ({
    stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],

    staticDirs: ['./public'],

    webpackFinal: async (config, {configType}) => {
      config.module.rules = config.module.rules.map((rule) => {
        // Check for file loader rule
        if (rule.loader && typeof rule.loader === 'string' && rule.loader.includes('file-loader')) {
          // Remove svg from rule.
          return {...rule, test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/};
        }

        return rule;
      });

      // handle svg rule here
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      });

      // Return the altered config
      return config;
    },
  }),

  manager: () => ({
    theme: create({
      base: 'light',
      brandTitle: 'Cision Atlas',
      brandUrl: 'https://cision.github.io/atlas-playground/',
      brandImage: 'https://www.cision.com/content/dam/cision-redesign/cision_logo_mobile.svg',
      brandTarget: '_blank',
    }),
  }),


  preview: () => ({
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        // order: ['Introduction', 'Foundation', 'Forms', 'Components', 'Layout', 'Pages', 'Playground'],
      },
    },
  }),
};
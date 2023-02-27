import { create, themes } from '@storybook/theming';
import { StorybookConfig } from '@storybook/react-webpack5';

export const options = {
  main: (): Partial<StorybookConfig> => ({
    stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],

    staticDirs: ['./public'],

    webpackFinal: async (config: any, { configType }) => {
      config.module.rules = config.module.rules.map((rule: any) => {
        // Check for file loader rule
        if (rule.type && typeof rule.type === 'string' && rule.type.includes('asset/resource')) {
          // Remove svg from rule.
          return { ...rule, test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/ };
        }

        return rule;
      });

      // handle svg rule here
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      });

      config.module.rules.push({
        test: /\.html$/i,
        loader: 'html-loader',
      });

      // Return the altered config
      return config;
    },
  }),

  manager: () => ({
    theme: create({
      base: 'dark',
      brandTitle: 'Cision Atlas',
      brandUrl: 'https://cision.github.io/atlas-playground/',
      brandImage: 'https://www.cision.com/content/dam/cision-redesign/cision_logo_mobile.svg',
      brandTarget: '_blank',
    }),
    docs: {
      theme: themes.dark,
    },
  }),

  preview: () => ({
    options: {
      storySort: {
        order: ['Introduction', 'Foundation', 'Forms', 'Components', 'Layout', 'Pages', 'Playground'],
      },
    },
  }),
};

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  staticDirs: ['./public'],
  webpackFinal: async (config, { configType }) => {

    config.module.rules = config.module.rules.map((rule) => {

      // Check for file loader rule
      if(rule.loader && typeof rule.loader === "string" && rule.loader.includes('file-loader')){
        // Remove svg from rule.
        return {...rule, test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/}
      }

      return rule;
    })

    // handle svg rule here
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    });

    // Return the altered config
    return config;
  },
}
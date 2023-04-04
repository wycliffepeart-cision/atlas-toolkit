module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
      '@babel/preset-typescript',
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['transform-html-import-to-string'],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['babel-plugin-inline-svg'],
  ],
};

import '../styles/index.css'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // options: {
  //   storySort: {
  //     // order: ['Introduction', 'Foundation', 'Forms', 'Components', 'Layout', 'Pages', 'Playground'],
  //   },
  // }
}
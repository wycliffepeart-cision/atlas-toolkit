import './style.css';
import '../theme/styles/index.css';
import '../src/icons';
import '../src';
import { options } from '../stoybook.config';

export const parameters = {
  backgrounds: {
    default: 'dark',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  ...options.preview(),
  options: {
    storySort: {
      order: ['Introduction', 'Getting Started', 'Foundation', 'Forms', 'Components', 'Layout', 'Pages', 'Playground', 'Guides'],
    },
  },
};

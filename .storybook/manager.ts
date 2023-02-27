import { addons } from '@storybook/addons';
import { options } from '../stoybook.config';

addons.setConfig({
  theme: options.manager().theme,
});

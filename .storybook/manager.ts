import { addons, types } from '@storybook/addons';
import { options } from '../stoybook.config';
import { Toolbar } from './toolbar';

addons.register('my/toolbar', () => {
  addons.add('my-toolbar-addon/toolbar', {
    title: 'Example Storybook toolbar',
    disabled: true,
    //👇 Sets the type of UI element in Storybook
    type: types.TOOL,
    //👇 Shows the Toolbar UI element if either the Canvas or Docs tab is active
    match: ({ viewMode }) => {

      console.log('viewmode', viewMode)

      return !!(viewMode && viewMode.match(/^(docs)$/));
    },
    render: Toolbar(),
  });
});

addons.setConfig({
  theme: options.manager().theme,
});

import { Meta, StoryFn } from '@storybook/react';

import { BasicButton } from '../components/button/basic-example/BasicButton';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction

export default {
  title: 'Playground/Button',
  component: BasicButton,
  argTypes: {
    title: 'Hello'
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    text: 'Primary',
  },
} as Meta<typeof BasicButton>;

const Template: StoryFn<typeof BasicButton> = (args) => <BasicButton {...args} />;

export const LoggedOut = Template.bind({});

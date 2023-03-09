import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BasicButton } from './button/basic-example/BasicButton';

export default {
  title: 'Components/Button1',
  component: BasicButton,
  argTypes: {
    title: 'he'
  },
//  tags: ['autodocs'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    text: 'Primary',
  },
} as Meta<typeof BasicButton>;

const Template: StoryFn<typeof BasicButton> = (args) => <BasicButton {...args} />;

export const PrimaryButton = Template.bind({
  args: {
    title: 'sss'
  }
});

import { BasicButton } from './basic-example/BasicButton';

export default {
  title: 'Components/Button/Playground',
};

const Template = (args) => <BasicButton />;

export const Button = Template.bind({});
Button.args = {
  user: {
    name: 'Jane Doe',
  },
};
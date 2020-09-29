import { chips } from './chips';

export default {
  title: 'Example/Chips',
  argTypes: {},
};

const Template = (args) => chips(args);

export const Primary = Template.bind({});
Primary.args = {};

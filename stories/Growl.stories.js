import React from 'react';
import {Growl} from '../components/Growl'


export default {
    title: 'Growl',
    component: Growl,
  };

const Template = (args) => <Growl {...args}  />;


export const Primary = Template.bind({});
Primary.args = {
  active: true,
  message: 'Button',
};

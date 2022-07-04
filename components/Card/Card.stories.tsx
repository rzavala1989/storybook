import { Card, CardProps } from './Card';
import { Meta, Story } from '@storybook/react';
import React from 'react';

//Tell storybook how to list your stories and provide information about them.
export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select' }
  }
} as Meta;

//dEFINE COMPONENTS STORY
export const Default: Story<CardProps> = (args) => <Card {...args} />;

Default.args = {
  variant: 'elevation',
  classes: 'w-64 h-64'
};

//Now, add a card with text in the middle
export const WithText: Story<CardProps> = (args) => (
  <Card {...args}>
    <p>Hello World</p>
  </Card>
);

WithText.args = {
  ...Default.args,
  classes: 'w-64 h-64 text-xl'
};

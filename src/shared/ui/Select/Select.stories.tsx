import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    options: [
        {
            value: '1',
            content: 'Опция 1',
        },
        {
            value: '2',
            content: 'Опция 2',
        },
        {
            value: '3',
            content: 'Опция 3',
        },
    ],
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    defaultValue: 'Выберите значение',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: '1', disabled: true },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
};

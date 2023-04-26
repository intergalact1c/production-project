import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 200 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    defaultValue: 'Выберите значение',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: '1', disabled: true },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    defaultValue: 'Выберите значение',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: '1', disabled: true },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    defaultValue: 'Выберите значение',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: '1', disabled: true },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    defaultValue: 'Выберите значение',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: '1', disabled: true },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
};

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    /* parameters: {
        loki: { skip: true },
    }, */
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

const args = {
    width: '100%',
    height: 200,
};

export const Light = Template.bind({});
Light.args = args;

export const Orange = Template.bind({});
Orange.args = args;
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    borderRadius: '50%',
};

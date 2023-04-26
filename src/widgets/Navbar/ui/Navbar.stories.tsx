import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { avatarUrl } from '@/shared/assets/tests/urls';
import { Notification } from '@/entities/Notification';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

const initialState = {
    user: {
        authData: {
            avatar: avatarUrl,
        },
    },
};

const notification = {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
    userId: '1',
} as Notification;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                { ...notification, id: '1' },
                { ...notification, id: '2' },
                { ...notification, id: '3' },
            ],
        },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState)];

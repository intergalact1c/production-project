import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const initialState = {
    loginForm: { login: 'admin', password: '1234' },
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(initialState)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState)];

export const DarkWithError = Template.bind({});
DarkWithError.args = {};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { login: '123', password: 'asd', error: 'Error' },
})];

export const DarkWithLoading = Template.bind({});
DarkWithLoading.args = {};
DarkWithLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { isLoading: true },
})];

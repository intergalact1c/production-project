var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';
export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(LoginForm, __assign({}, args), void 0); };
var initialState = {
    loginForm: { login: 'admin', password: '1234' },
};
export var Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(initialState)];
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState)];
export var DarkWithError = Template.bind({});
DarkWithError.args = {};
DarkWithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { login: '123', password: 'asd', error: 'Error' },
    })];
export var DarkWithLoading = Template.bind({});
DarkWithLoading.args = {};
DarkWithLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { isLoading: true },
    })];

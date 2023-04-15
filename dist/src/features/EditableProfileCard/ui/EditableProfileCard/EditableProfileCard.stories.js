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
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { avatarUrl as AvatarImg } from 'shared/assets/tests/urls';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { EditableProfileCard } from './EditableProfileCard';
export default {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(EditableProfileCard, __assign({}, args), void 0); };
var initialState = {
    profile: {
        form: {
            first: 'Имя',
            lastname: 'Фамилия',
            age: 19,
            city: 'Город',
            login: 'Логин',
            avatar: AvatarImg,
            currency: Currency.RUB,
            country: Country.Russia,
        },
        readonly: true,
    },
};
export var Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator(initialState)];

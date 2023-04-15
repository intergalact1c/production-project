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
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { avatarUrl as AvatarImg } from 'shared/assets/tests/urls';
import { ProfileCard } from './ProfileCard';
// import AvatarImg from '../../assets/tests/avatar.png';
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(ProfileCard, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Имя',
        lastname: 'Фамилия',
        age: 19,
        city: 'Город',
        login: 'Логин',
        avatar: AvatarImg,
        currency: Currency.RUB,
        country: Country.Russia,
    },
};
export var WithError = Template.bind({});
WithError.args = {
    error: 'error',
};
export var Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

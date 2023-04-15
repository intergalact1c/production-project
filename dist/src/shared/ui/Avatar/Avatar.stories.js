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
import { Avatar } from '../Avatar/Avatar';
import AvatarImg from '../../assets/tests/avatar.png';
export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Avatar, __assign({}, args), void 0); };
export var Normal = Template.bind({});
Normal.args = {
    src: AvatarImg,
};
export var Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
};

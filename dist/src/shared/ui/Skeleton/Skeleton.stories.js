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
import { Skeleton } from './Skeleton';
export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Skeleton, __assign({}, args), void 0); };
var args = {
    width: '100%',
    height: 200,
};
export var Light = Template.bind({});
Light.args = args;
export var Orange = Template.bind({});
Orange.args = args;
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
export var Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    borderRadius: '50%',
};

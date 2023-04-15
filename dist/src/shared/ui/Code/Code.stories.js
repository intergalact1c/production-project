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
import { Code } from './Code';
export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Code, __assign({}, args), void 0); };
var initialState = {};
export var Light = Template.bind({});
Light.args = {
    text: "const path = require('path');\n\nconst server = jsonServer.create();",
};
Light.decorators = [StoreDecorator(initialState)];

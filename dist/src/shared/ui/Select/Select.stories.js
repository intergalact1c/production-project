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
import { Select } from './Select';
export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Select, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    options: [
        {
            value: '1', content: 'Опция 1',
        },
        {
            value: '2', content: 'Опция 2',
        },
        {
            value: '3', content: 'Опция 3',
        },
    ],
};

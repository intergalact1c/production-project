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
import { ListBox } from './ListBox';
export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        function (Story) { return _jsx("div", __assign({ style: { padding: 200 } }, { children: _jsx(Story, {}, void 0) }), void 0); },
    ],
};
var Template = function (args) { return _jsx(ListBox, __assign({}, args), void 0); };
export var BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    defaultValue: 'Выберите значение',
    onChange: function (value) { },
    value: undefined,
    items: [
        { value: '1', content: '1', disabled: true },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
};
export var BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    defaultValue: 'Выберите значение',
    onChange: function (value) { },
    value: undefined,
    items: [
        { value: '1', content: '1', disabled: true },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
};
export var TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    defaultValue: 'Выберите значение',
    onChange: function (value) { },
    value: undefined,
    items: [
        { value: '1', content: '1', disabled: true },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
};
export var TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    defaultValue: 'Выберите значение',
    onChange: function (value) { },
    value: undefined,
    items: [
        { value: '1', content: '1', disabled: true },
        { value: '2', content: '2' },
        { value: '3', content: '3' },
    ],
};

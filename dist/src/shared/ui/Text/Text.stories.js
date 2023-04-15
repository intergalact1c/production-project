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
import { Text, TextSize, TextTheme } from './Text';
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args), void 0); };
export var Light = Template.bind({});
Light.args = {
    title: 'Заголовок',
    text: 'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона',
};
export var Dark = Template.bind({});
Dark.args = {
    title: 'Заголовок',
    text: 'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Заголовок',
};
export var OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона',
};
OnlyText.decorators = [ThemeDecorator(Theme.DARK)];
export var ErrorLight = Template.bind({});
ErrorLight.args = {
    title: 'Заголовок',
    text: 'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона',
    theme: TextTheme.ERROR,
};
export var ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Заголовок',
    text: 'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
export var SizeS = Template.bind({});
SizeS.args = {
    title: 'Заголовок',
    text: 'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона',
    size: TextSize.S,
};
export var SizeM = Template.bind({});
SizeM.args = {
    title: 'Заголовок',
    text: 'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона',
    size: TextSize.M,
};
export var SizeL = Template.bind({});
SizeL.args = {
    title: 'Заголовок',
    text: 'Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона',
    size: TextSize.L,
};

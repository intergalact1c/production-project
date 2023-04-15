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
import { CommentList } from './CommentList';
export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var args = {
    comments: [
        {
            id: '1',
            user: {
                id: '1', login: 'login', avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
            },
            text: 'Текст комментария',
        },
        {
            id: '2',
            user: {
                id: '1', login: 'login', avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
            },
            text: 'Текст комментария 2',
        },
    ],
};
var Template = function (args) { return _jsx(CommentList, __assign({}, args), void 0); };
export var Light = Template.bind({});
Light.args = args;
export var Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export var Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};

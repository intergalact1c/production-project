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
import { I18nextProvider } from 'react-i18next';
import i18nStorybook from '../../i18n/i18nStorybook';
export var TranslationDecorator = function (StoryComponent) { return (_jsx(I18nextProvider, __assign({ i18n: i18nStorybook }, { children: _jsx(StoryComponent, {}, void 0) }), void 0)); };

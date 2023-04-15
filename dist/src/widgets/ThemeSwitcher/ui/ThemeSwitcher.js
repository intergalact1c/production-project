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
import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
export var ThemeSwitcher = memo(function (_a) {
    var className = _a.className, _b = _a.isInverted, isInverted = _b === void 0 ? true : _b;
    var _c = useTheme(), theme = _c.theme, toggleTheme = _c.toggleTheme;
    var normal = theme === Theme.DARK ? _jsx(DarkIcon, {}, void 0) : _jsx(LightIcon, {}, void 0);
    var storybook = theme === Theme.DARK ? _jsx(LightIcon, {}, void 0) : _jsx(DarkIcon, {}, void 0);
    return (_jsx(Button, __assign({ theme: ButtonTheme.CLEAR, className: classNames('', {}, [className]), onClick: toggleTheme }, { children: isInverted ? normal : storybook }), void 0));
});

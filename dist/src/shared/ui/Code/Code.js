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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';
import CopyIcon from '../../assets/icons/copy.svg';
export var Code = memo(function (_a) {
    var className = _a.className, text = _a.text;
    var t = useTranslation('article-details').t;
    var onCopy = useCallback(function () {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (_jsxs("div", __assign({ className: classNames(cls.Code, {}, [className]) }, { children: [_jsx(Button, __assign({ type: "button", theme: ButtonTheme.CLEAR, className: cls.btn, title: t('Копировать'), onClick: onCopy }, { children: _jsx(CopyIcon, {}, void 0) }), void 0), _jsx("pre", { children: _jsx("code", { children: text }, void 0) }, void 0)] }), void 0));
});

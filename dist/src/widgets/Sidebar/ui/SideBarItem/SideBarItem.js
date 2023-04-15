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
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SideBarItem.module.scss';
export var SideBarItem = memo(function (_a) {
    var item = _a.item, collapsed = _a.collapsed;
    var t = useTranslation().t;
    var isAuth = useSelector(getUserAuthData);
    var path = item.path, Icon = item.Icon, text = item.text, authOnly = item.authOnly;
    // i18next-extract-disable-next-line
    var i18nText = t(text);
    if (authOnly && !isAuth) {
        return null;
    }
    return (_jsx("div", __assign({ role: "listitem", className: classNames(cls.SideBarItem, {}, []) }, { children: _jsxs(AppLink, __assign({ to: path, theme: AppLinkTheme.SECONDARY, title: i18nText }, { children: [_jsx(Icon, {}, void 0), !collapsed && i18nText] }), void 0) }), void 0));
});

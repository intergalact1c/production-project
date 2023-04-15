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
import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './Sidebar.module.scss';
export var Sidebar = memo(function (_a) {
    var _b;
    var className = _a.className;
    var t = useTranslation().t;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    var SidebarItemList = useSelector(getSidebarItems);
    var itemsList = useMemo(function () { return SidebarItemList.map(function (item) { return (_jsx(SideBarItem, { item: item, collapsed: collapsed }, item.path)); }); }, [SidebarItemList, collapsed]);
    return (_jsxs("aside", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [
            className,
        ]) }, { children: [_jsx(Button, __assign({ type: "button", "data-testid": "sidebar-toggle", onClick: onToggle, title: collapsed ? t('Развернуть') : t('Свернуть'), className: cls.toggleBtn, theme: ButtonTheme.BACKGROUND_INVERTED, square: true, size: ButtonSize.L }, { children: collapsed ? '→' : '←' }), void 0), _jsx("div", __assign({ role: "navigation" }, { children: _jsx(VStack, __assign({ role: "list", gap: "16", align: "start" }, { children: itemsList }), void 0) }), void 0), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}, void 0), _jsx(LanguageSwitcher, { className: cls.lang, short: collapsed }, void 0)] }), void 0)] }), void 0));
});

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
import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByLogin';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { DropDown } from 'shared/ui/DropDown/DropDown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var authData = useSelector(getUserAuthData);
    var t = useTranslation().t;
    var _b = useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var dispatch = useDispatch();
    var onOpenModal = useCallback(function () {
        setIsModalOpen(true);
    }, []);
    var onCloseModal = useCallback(function () {
        setIsModalOpen(false);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    var navbarClassName = classNames(cls.Navbar, {}, [className]);
    if (authData) {
        return (_jsxs("header", __assign({ className: navbarClassName }, { children: [_jsx(Text, { theme: TextTheme.INVERTED, title: t('APP') }, void 0), _jsx(AppLink, __assign({ theme: AppLinkTheme.INVERTED, to: RoutePath.article_create, className: classNames(cls.link, {}, ['ml-a']) }, { children: t('Создать статью') }), void 0), _jsx(DropDown, { items: [
                        {
                            content: t('Профиль пользователя'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        },
                    ], trigger: _jsx(Avatar, { size: 30, src: authData.avatar }, void 0), direction: "bottom left" }, void 0)] }), void 0));
    }
    return (_jsxs("header", __assign({ className: navbarClassName }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: "ml-a", onClick: onOpenModal }, { children: (t('Войти')) }), void 0), _jsx(LoginModal, { isOpen: isModalOpen, onClose: onCloseModal }, void 0)] }), void 0));
});

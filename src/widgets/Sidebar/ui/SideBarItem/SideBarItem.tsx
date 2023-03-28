import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    const {
        path, Icon, text, authOnly,
    } = item;

    // i18next-extract-disable-next-line
    const i18nText = t(text);

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <li className={classNames(cls.SideBarItem, {}, [])}>
            <AppLink to={path} theme={AppLinkTheme.SECONDARY} title={i18nText}>
                <Icon />
                {!collapsed && i18nText}
            </AppLink>
        </li>
    );
});

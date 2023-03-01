import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation();
    const { path, Icon, text } = item;

    return (
        <li className={classNames(cls.SideBarItem, {}, [])}>
            <AppLink to={path} theme={AppLinkTheme.SECONDARY} title={t(text)}>
                <Icon />
                {!collapsed && t(text)}
            </AppLink>
        </li>
    );
});

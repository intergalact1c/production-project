import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    classname?: string;
}

export const Sidebar = ({ classname }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                classname,
            ])}
        >
            <Button
                type="button"
                data-testid="sidebar-toggle"
                onClick={onToggle}
                title={collapsed ? t('Развернуть') : t('Свернуть')}
                className={cls.toggleBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '→' : '←'}
            </Button>
            <nav className={cls.links}>
                <ul>
                    <li>
                        <AppLink to="/" theme={AppLinkTheme.SECONDARY} title={t('Главная')}>
                            <HomeIcon />
                            {!collapsed && t('Главная')}
                        </AppLink>
                    </li>
                    <li>
                        <AppLink to="/about" theme={AppLinkTheme.SECONDARY} title={t('О сайте')}>
                            <AboutIcon />
                            {!collapsed && t('О сайте')}
                        </AppLink>
                    </li>
                </ul>
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher classname={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};

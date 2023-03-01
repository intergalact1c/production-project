import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import { SidebarItemList } from '../../model/items';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    classname?: string;
}

export const Sidebar = memo(({ classname }: SidebarProps) => {
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
                    {SidebarItemList.map((item) => (
                        <SideBarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))}
                </ul>
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher classname={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});

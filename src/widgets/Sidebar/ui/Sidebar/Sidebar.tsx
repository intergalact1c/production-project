import React, { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const SidebarItemList = useSelector(getSidebarItems);

    const itemsList = useMemo(
        () =>
            SidebarItemList.map((item) => (
                <SideBarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [SidebarItemList, collapsed],
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
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
            <div role="navigation">
                <VStack role="list" gap="16" align="start">
                    {itemsList}
                </VStack>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});

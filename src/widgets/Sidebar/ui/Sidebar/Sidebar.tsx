import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  classname?: string;
}

export const Sidebar = ({ classname }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                classname,
            ])}
        >
            <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>123</button>
            <div className={classNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <LanguageSwitcher classname={cls.lang} />
            </div>
        </div>
    );
};

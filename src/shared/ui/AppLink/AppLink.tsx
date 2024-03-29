import React, { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...rest } = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [cls[theme], className])} {...rest}>
            {children}
        </Link>
    );
});

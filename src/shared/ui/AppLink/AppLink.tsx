import React, { FC, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    classname?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        classname,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...rest
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [cls[theme], classname])}
            {...rest}
        >
            {children}
        </Link>
    );
});

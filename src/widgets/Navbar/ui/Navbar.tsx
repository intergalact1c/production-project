import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  classname?: string;
}

export const Navbar = ({ classname }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [classname])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};

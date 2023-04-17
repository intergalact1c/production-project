import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByLogin';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropDown } from 'features/AvatarDropDown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const navbarClassName = classNames(cls.Navbar, {}, [className]);

    if (authData) {
        return (
            <header className={navbarClassName}>
                <Text theme={TextTheme.INVERTED} title={t('APP')} />
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.article_create}
                    className={classNames(cls.link, {}, ['ml-a'])}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropDown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={navbarClassName}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className="ml-a" onClick={onOpenModal}>{(t('Войти'))}</Button>
            <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
        </header>
    );
});

import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByLogin';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        navigate('/');
    }, [dispatch, navigate]);

    const navbarClassName = classNames(cls.Navbar, {}, [className]);

    if (authData) {
        return (
            <div className={navbarClassName}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} className="ml-a" onClick={onLogout}>{(t('Выйти'))}</Button>
            </div>
        );
    }

    return (
        <div className={navbarClassName}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className="ml-a" onClick={onOpenModal}>{(t('Войти'))}</Button>
            <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
        </div>
    );
});

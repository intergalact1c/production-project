import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    classname?: string;
}

export const Navbar = ({ classname }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [classname])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className="ml-a" onClick={onOpenModal}>{(t('Войти'))}</Button>
            <LoginModal isOpen={isModalOpen} onClose={onCloseModal} />
        </div>
    );
};

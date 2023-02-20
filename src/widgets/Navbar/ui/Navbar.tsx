import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  classname?: string;
}

export const Navbar = ({ classname }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsModalOpen((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [classname])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className="ml-a" onClick={onToggleModal}>{(t('Войти'))}</Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isModalOpen} onClose={onToggleModal}>
                Модальное окно
            </Modal>
        </div>
    );
};

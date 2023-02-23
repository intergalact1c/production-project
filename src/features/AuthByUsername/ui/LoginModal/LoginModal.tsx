import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    classname?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ classname, isOpen, onClose }: LoginModalProps) => (
    <Modal
        lazy
        isOpen={isOpen}
        onClose={onClose}
        classname={classNames(cls.LoginModal, {}, [classname])}
    >
        <LoginForm />
    </Modal>
);

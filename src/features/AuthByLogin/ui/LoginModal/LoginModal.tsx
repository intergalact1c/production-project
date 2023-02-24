import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
        classname={classNames('', {}, [classname])}
    >
        <LoginForm />
    </Modal>
);

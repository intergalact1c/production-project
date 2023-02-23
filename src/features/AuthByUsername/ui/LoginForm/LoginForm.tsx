import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    classname?: string;
}

export const LoginForm = ({ classname }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [classname])}>
            <Input
                autoFocus
                placeholder={t('Логин')}
            />
            <Input
                placeholder={t('Пароль')}
            />
            <Button
                theme={ButtonTheme.BACKGROUND}
                className={classNames(cls.loginFormBtn, {}, [classname])}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};

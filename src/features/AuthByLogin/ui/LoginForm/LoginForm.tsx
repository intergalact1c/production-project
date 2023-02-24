import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { fetchUserByLogin } from '../../model/services/fetchUserByLogin/fetchUserByLogin';
import { getLoginForm } from '../../model/selectors/getLoginForm/getLoginForm';
import { loginActions } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    classname?: string;
}

export const LoginForm = memo(({ classname }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        login, password, isLoading, error,
    } = useSelector(getLoginForm);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(loginActions.setLogin(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(fetchUserByLogin({ login, password }));
    }, [dispatch, login, password]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onLoginClick();
        }
    }, [onLoginClick]);

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, login, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [classname])}>
            <Text
                title={t('Форма авторизации')}
                classname={cls.loginFormTitle}
            />
            <Input
                autoFocus
                placeholder={t('Логин')}
                value={login}
                onChange={onChangeLogin}
                classname={cls.loginFormInput}
            />
            <Input
                placeholder={t('Пароль')}
                value={password}
                onChange={onChangePassword}
                classname={cls.loginFormInput}
            />
            {error && (
                <Text
                    text={t('Неверный логин или пароль')}
                    theme={TextTheme.ERROR}
                    classname={cls.loginFormError}
                />
            )}
            <Button
                disabled={isLoading}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.loginFormBtn}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginFormPassword } from '../../model/selectors/getLoginFormPassword/getLoginFormPassword';
import { getLoginFormLoading } from '../../model/selectors/getLoginFormLoading/getLoginFormLoading';
import { getLoginFormError } from '../../model/selectors/getLoginFormError/getLoginFormError';
import { getLoginFormLogin } from '../../model/selectors/getLoginFormLogin/getLoginFormLogin';
import { fetchUserByLogin } from '../../model/services/fetchUserByLogin/fetchUserByLogin';

import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    classname?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ classname }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const login = useSelector(getLoginFormLogin);
    const password = useSelector(getLoginFormPassword);
    const isLoading = useSelector(getLoginFormLoading);
    const error = useSelector(getLoginFormError);

    const onChangeLogin = useCallback((value: string) => {
        dispatch(loginActions.setLogin(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onLoginClick = useCallback(() => {
        dispatch(fetchUserByLogin({ login, password }));
    }, [dispatch, login, password]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                onLoginClick();
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onLoginClick, login, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;

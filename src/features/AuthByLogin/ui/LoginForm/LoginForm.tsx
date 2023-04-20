import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { User } from '@/entities/User';
import { getLoginFormPassword } from '../../model/selectors/getLoginFormPassword/getLoginFormPassword';
import { getLoginFormLoading } from '../../model/selectors/getLoginFormLoading/getLoginFormLoading';
import { getLoginFormError } from '../../model/selectors/getLoginFormError/getLoginFormError';
import { getLoginFormLogin } from '../../model/selectors/getLoginFormLogin/getLoginFormLogin';
import { fetchUserByLogin } from '../../model/services/fetchUserByLogin/fetchUserByLogin';

import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const login = useSelector(getLoginFormLogin);
    const password = useSelector(getLoginFormPassword);
    const isLoading = useSelector(getLoginFormLoading);
    const error = useSelector(getLoginFormError);

    const navigate = useNavigate();

    const onChangeLogin = useCallback((value: string) => {
        dispatch(loginActions.setLogin(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(fetchUserByLogin({ login, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            const user = result.payload as User;
            navigate(`${RoutePath.profile}${user.id}`);
        }
    }, [dispatch, login, password, onSuccess, navigate]);

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
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text
                    title={t('Форма авторизации')}
                    className={cls.loginFormTitle}
                />
                <Input
                    autoFocus
                    placeholder={t('Логин')}
                    value={login}
                    onChange={onChangeLogin}
                    className={cls.loginFormInput}
                />
                <Input
                    placeholder={t('Пароль')}
                    value={password}
                    onChange={onChangePassword}
                    className={cls.loginFormInput}
                />
                {error && (
                    <Text
                        text={t('Неверный логин или пароль')}
                        theme={TextTheme.ERROR}
                        className={cls.loginFormError}
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

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCardHeader, } from 'features/EditableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileIsLoading, } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateErrors, } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
var reducers = {
    profile: profileReducer,
};
export var EditableProfileCard = memo(function (props) {
    var _a;
    var className = props.className, id = props.id;
    var t = useTranslation('profile').t;
    var dispatch = useAppDispatch();
    var form = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var isLoading = useSelector(getProfileIsLoading);
    var readonly = useSelector(getProfileReadOnly);
    var validateErrors = useSelector(getProfileValidateErrors);
    var validateErrorsTranslates = (_a = {},
        _a[ValidateProfileError.INCORRECT_USER_DATA] = t('Имя и фамилия обязательны'),
        _a[ValidateProfileError.INCORRECT_AVATAR] = t('Аватар обязателен'),
        _a[ValidateProfileError.INCORRECT_LOGIN] = t('Логин обязателен'),
        _a[ValidateProfileError.INCORRECT_CITY] = t('Город обязателен'),
        _a[ValidateProfileError.INCORRECT_AGE] = t('Некорректный возраст'),
        _a[ValidateProfileError.INCORRECT_COUNTRY] = t('Некорректный регион'),
        _a[ValidateProfileError.INCORRECT_CURRENCY] = t('Некорректная валюта'),
        _a[ValidateProfileError.NO_DATA] = t('Данные не указаны'),
        _a[ValidateProfileError.SERVER_ERROR] = t('Серверная ошибка при сохранении'),
        _a);
    var profileId = __PROJECT__ !== 'storybook' ? id : '1';
    useInitialEffect(function () {
        if (profileId) {
            dispatch(fetchProfileData(profileId));
        }
    });
    var onChangeFirstName = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    var onChangeLastName = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ age: Number((value === null || value === void 0 ? void 0 : value.replace(/[^0-9]/g, '')) || 0) }));
    }, [dispatch]);
    var onChangeCity = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    var onChangeLogin = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ login: value || '' }));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (currency) {
        dispatch(profileActions.updateProfile({ currency: currency }));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (country) {
        dispatch(profileActions.updateProfile({ country: country }));
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs("div", __assign({ className: classNames('', {}, [className]) }, { children: [_jsx(EditableProfileCardHeader, {}, void 0), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (error) { return (_jsx(Text, { theme: TextTheme.ERROR, text: validateErrorsTranslates[error], "data-testid": "EditableProfileCard.Error" }, error)); }), _jsx(ProfileCard, { data: form, error: error, isLoading: isLoading, readonly: readonly, onChangeFirstName: onChangeFirstName, onChangeLastName: onChangeLastName, onChangeAge: onChangeAge, onChangeCity: onChangeCity, onChangeLogin: onChangeLogin, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry }, void 0)] }), void 0) }), void 0));
});

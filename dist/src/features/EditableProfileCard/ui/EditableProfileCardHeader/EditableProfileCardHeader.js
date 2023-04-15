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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import cls from './EditableProfileCardHeader.module.scss';
export var EditableProfileCardHeader = function (_a) {
    var classname = _a.classname;
    var t = useTranslation('profile').t;
    var authData = useSelector(getUserAuthData);
    var profileData = useSelector(getProfileData);
    var isEditable = (authData === null || authData === void 0 ? void 0 : authData.id) === (profileData === null || profileData === void 0 ? void 0 : profileData.id);
    var readonly = useSelector(getProfileReadOnly);
    var dispatch = useAppDispatch();
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsxs(HStack, __assign({ className: classNames(cls.ProfilePageHeader, {}, [classname]) }, { children: [_jsx(Text, { title: t('Профиль пользователя'), className: cls.text }, void 0), isEditable && (_jsx("div", { children: readonly ? (_jsx(Button, __assign({ theme: ButtonTheme.BACKGROUND_INVERTED, className: cls.editBtn, onClick: onEdit, "data-testid": "EditableProfileCardHeader.EditButton" }, { children: t('Редактировать') }), void 0)) : (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE_RED, className: cls.btn, onClick: onCancelEdit, "data-testid": "EditableProfileCardHeader.CancelButton" }, { children: t('Отменить') }), void 0), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, className: cls.btn, onClick: onSave, "data-testid": "EditableProfileCardHeader.SaveButton" }, { children: t('Сохранить') }), void 0)] }, void 0)) }, void 0))] }), void 0));
};

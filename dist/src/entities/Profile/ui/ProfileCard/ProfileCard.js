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
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import { HStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (_a) {
    var _b;
    var className = _a.className, data = _a.data, error = _a.error, isLoading = _a.isLoading, readonly = _a.readonly, onChangeFirstName = _a.onChangeFirstName, onChangeLastName = _a.onChangeLastName, onChangeAge = _a.onChangeAge, onChangeCity = _a.onChangeCity, onChangeLogin = _a.onChangeLogin, onChangeAvatar = _a.onChangeAvatar, onChangeCurrency = _a.onChangeCurrency, onChangeCountry = _a.onChangeCountry;
    var t = useTranslation('profile').t;
    if (isLoading) {
        return (_jsx(HStack, __assign({ justify: "center", className: classNames(cls.ProfileCard, {}, [className]) }, { children: _jsx(Loader, {}, void 0) }), void 0));
    }
    if (error) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className, cls.error]) }, { children: _jsx(Text, { theme: TextTheme.ERROR, title: t('Произошла ошибка при загрузке профиля'), text: t('Попробуйте обновить страницу'), align: TextAlign.CENTER }, void 0) }), void 0));
    }
    var mods = (_b = {},
        _b[cls.editing] = !readonly,
        _b);
    return (_jsxs("div", __assign({ className: classNames(cls.ProfileCard, mods, [className]) }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx(HStack, __assign({ justify: "center", className: cls.avatarWrapper }, { children: _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar, alt: "".concat(data === null || data === void 0 ? void 0 : data.first, " ").concat(data === null || data === void 0 ? void 0 : data.lastname) }, void 0) }), void 0)), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('Имя'), className: cls.input, readonly: readonly, onChange: onChangeFirstName, "data-testid": "ProfileCard.firstname" }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('Фамилия'), className: cls.input, readonly: readonly, onChange: onChangeLastName, "data-testid": "ProfileCard.lastname" }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t('Возраст'), className: cls.input, readonly: readonly, onChange: onChangeAge }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t('Город'), className: cls.input, readonly: readonly, onChange: onChangeCity }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.login, placeholder: t('Логин'), className: cls.input, readonly: readonly, onChange: onChangeLogin }, void 0), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('Аватар'), className: cls.input, readonly: readonly, onChange: onChangeAvatar }, void 0), _jsx(CurrencySelect, { value: data === null || data === void 0 ? void 0 : data.currency, className: cls.input, readonly: readonly, onChange: onChangeCurrency }, void 0), _jsx(CountrySelect, { value: data === null || data === void 0 ? void 0 : data.country, className: cls.input, readonly: readonly, onChange: onChangeCountry }, void 0)] }), void 0));
};

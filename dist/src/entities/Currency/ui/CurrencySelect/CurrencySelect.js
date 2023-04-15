import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';
var options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];
export var CurrencySelect = memo(function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation('profile').t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(_Fragment, { children: _jsx(ListBox, { label: t('Укажите валюту'), defaultValue: Currency.EUR, value: value, onChange: onChangeHandler, items: options, className: classNames('', {}, [className]), readonly: readonly, direction: "bottom right" }, void 0) }, void 0));
});

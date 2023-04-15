import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';
var options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];
export var CountrySelect = memo(function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation('profile').t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(_Fragment, { children: _jsx(ListBox, { label: t('Укажите страну'), defaultValue: Country.Armenia, value: value, onChange: onChangeHandler, items: options, className: classNames('', {}, [className]), readonly: readonly, direction: "bottom right" }, void 0) }, void 0));
});

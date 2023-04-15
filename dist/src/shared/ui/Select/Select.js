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
import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack/HStack/HStack';
import cls from './Select.module.scss';
var typedMemo = memo;
// Дженерик пропсы плохо работают с memo. Для мемоизации нужно добавить специальную обертку
export var Select = typedMemo(function (_a) {
    var className = _a.className, _b = _a.label, label = _b === void 0 ? 'Выберите из списка:' : _b, _c = _a.selectId, selectId = _c === void 0 ? 'some-select' : _c, options = _a.options, value = _a.value, onChange = _a.onChange, readonly = _a.readonly, _d = _a.mwa, mwa = _d === void 0 ? false : _d;
    var optionsList = useMemo(function () { return (options === null || options === void 0 ? void 0 : options.map(function (opt) { return (_jsx("option", __assign({ value: opt.value }, { children: opt.content }), opt.value)); })); }, [options]);
    var onChangeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    var mods = {
        mw_a: mwa,
    };
    return (_jsxs(HStack, __assign({ justify: "between", className: classNames(cls.SelectWrapper, {}, [className]) }, { children: [label && _jsx("label", __assign({ htmlFor: selectId, className: classNames('', mods, []) }, { children: _jsx("span", { children: label }, void 0) }), void 0), _jsx("select", __assign({ id: selectId, value: value, onChange: onChangeHandler, disabled: readonly }, { children: optionsList }), void 0)] }), void 0));
});

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
import { Fragment } from 'react';
import { Listbox as HListbox } from '@headlessui/react'; // H... - headless
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack/HStack/HStack';
import cls from './ListBox.module.scss';
var mapDirectionClass = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};
export var ListBox = function (_a) {
    var _b;
    var className = _a.className, items = _a.items, value = _a.value, defaultValue = _a.defaultValue, onChange = _a.onChange, _c = _a.readonly, readonly = _c === void 0 ? false : _c, _d = _a.direction, direction = _d === void 0 ? 'bottom left' : _d, label = _a.label;
    return (_jsx(HListbox, __assign({ disabled: readonly, as: "div", value: value, onChange: onChange, className: classNames(cls.ListBox, {}, [className]) }, { children: _jsxs(HStack, { children: [label && (_jsx("span", __assign({ className: cls.label }, { children: label }), void 0)), _jsxs("div", __assign({ className: cls.wrapper }, { children: [_jsx(HListbox.Button, __assign({ className: classNames(cls.btn, (_b = {}, _b[cls.disabled] = readonly, _b), []) }, { children: value !== null && value !== void 0 ? value : defaultValue }), void 0), _jsx(HListbox.Options, __assign({ className: classNames(cls.options, {}, [mapDirectionClass[direction]]) }, { children: items === null || items === void 0 ? void 0 : items.map(function (item) { return (_jsx(HListbox.Option, __assign({ value: item.value, disabled: item.disabled, as: Fragment }, { children: function (_a) {
                                    var _b;
                                    var active = _a.active, selected = _a.selected;
                                    return (_jsxs("li", __assign({ className: classNames(cls.item, (_b = {}, _b[cls.active] = active, _b[cls.disabled] = item.disabled, _b), []) }, { children: [selected && '>> ', item.content] }), void 0));
                                } }), item.value)); }) }), void 0)] }), void 0)] }, void 0) }), void 0));
};

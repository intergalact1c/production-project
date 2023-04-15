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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack/HStack/HStack';
import cls from './Input.module.scss';
var charSize = 7.33;
export var Input = memo(function (props) {
    var _a;
    var className = props.className, value = props.value, onChange = props.onChange, _b = props.type, type = _b === void 0 ? 'text' : _b, placeholder = props.placeholder, _c = props.autoFocus, autoFocus = _c === void 0 ? false : _c, _d = props.readonly, readonly = _d === void 0 ? false : _d, _e = props.mwa, mwa = _e === void 0 ? false : _e, rest = __rest(props, ["className", "value", "onChange", "type", "placeholder", "autoFocus", "readonly", "mwa"]);
    var _f = useState(false), isFocused = _f[0], setIsFocused = _f[1];
    var _g = useState(0), caretPosition = _g[0], setCaretPosition = _g[1];
    var _h = useState(0), selectCaretPosition = _h[0], setSelectCaretPosition = _h[1];
    var _j = useState(0), inputWidth = _j[0], setInputWidth = _j[1];
    var inputRef = useRef(null);
    var onChangeHandler = function (e) {
        var val = e.target.value;
        onChange === null || onChange === void 0 ? void 0 : onChange(val);
        if (val.length === selectCaretPosition) {
            if (val.length * charSize < inputWidth) {
                setCaretPosition(val.length);
            }
            else {
                setCaretPosition(inputWidth / charSize);
            }
        }
    };
    var onBlurHandler = function () {
        setIsFocused(false);
    };
    var onFocusHandler = function () {
        setIsFocused(true);
    };
    var onSelectHandler = function (e) {
        var start = e.currentTarget.selectionStart || 0;
        setSelectCaretPosition(start + 1);
        if (e.currentTarget.value.length * charSize < inputWidth) {
            setCaretPosition(start + 1);
        }
    };
    var mods = (_a = {},
        _a[cls.readonly] = readonly,
        _a);
    var isCaretVisible = isFocused && !readonly;
    useEffect(function () {
        var _a;
        if (autoFocus) {
            onFocusHandler();
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [autoFocus]);
    useEffect(function () {
        var _a;
        if (!inputWidth) {
            var width = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth;
            if (width && inputRef.current.parentElement) {
                setInputWidth(Math.ceil(width - charSize));
                inputRef.current.parentElement.style.width = "".concat(inputRef.current.offsetWidth, "px");
                inputRef.current.style.width = "".concat(width - charSize, "px");
            }
        }
    }, [inputWidth]);
    return (_jsxs(HStack, __assign({ justify: "between", className: classNames(cls.InputWrapper, mods, [className]) }, { children: [placeholder && (_jsx("div", __assign({ className: classNames(cls.placeholder, { mw_a: mwa }, []) }, { children: _jsx("span", { children: placeholder }, void 0) }), void 0)), _jsxs("div", __assign({ className: cls.caretWrapper, style: { paddingLeft: "".concat(charSize, "px") } }, { children: [_jsx("input", __assign({ ref: inputRef, type: type, value: value, onChange: onChangeHandler, onBlur: onBlurHandler, onFocus: onFocusHandler, onSelect: onSelectHandler, className: cls.input, disabled: readonly }, rest), void 0), isCaretVisible && (_jsx("span", { className: cls.caret, style: { left: "".concat(caretPosition * charSize, "px") } }, void 0))] }), void 0)] }), void 0));
});

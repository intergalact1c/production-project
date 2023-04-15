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
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useState, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
export var Modal = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, isOpen = _a.isOpen, onClose = _a.onClose, _c = _a.lazy, lazy = _c === void 0 ? false : _c;
    var _d = useState(false), isMounted = _d[0], setIsMounted = _d[1];
    var mods = (_b = {},
        _b[cls.opened] = isOpen,
        _b);
    var closeHandler = useCallback(function () {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    var onContentClick = function (e) {
        e.stopPropagation();
    };
    useEffect(function () {
        var onKeyDown = function (e) {
            if (e.key === 'Escape') {
                closeHandler();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, closeHandler]);
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
        return function () {
            setIsMounted(false);
        };
    }, [isOpen]);
    if (lazy && !isMounted) {
        return null;
    }
    return (_jsx(Portal, { children: _jsx("div", __assign({ className: classNames(cls.Modal, mods, [className]) }, { children: _jsx("div", __assign({ onClick: closeHandler, className: cls.overlay }, { children: _jsx("div", __assign({ onClick: onContentClick, className: cls.content }, { children: children }), void 0) }), void 0) }), void 0) }, void 0));
};

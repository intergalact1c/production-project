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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';
var justifyClasses = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};
var alignClasses = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};
var directionClasses = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
var gapClasses = {
    4: cls.gap_4,
    8: cls.gap_8,
    16: cls.gap_16,
    32: cls.gap_32,
};
export var Flex = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, _c = _a.justify, justify = _c === void 0 ? 'start' : _c, _d = _a.align, align = _d === void 0 ? 'center' : _d, _e = _a.direction, direction = _e === void 0 ? 'row' : _e, gap = _a.gap, max = _a.max, rest = __rest(_a, ["className", "children", "justify", "align", "direction", "gap", "max"]);
    var classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];
    var mods = (_b = {},
        _b[cls.max] = max,
        _b);
    return (_jsx("div", __assign({ className: classNames(cls.Flex, mods, classes) }, rest, { children: children }), void 0));
};

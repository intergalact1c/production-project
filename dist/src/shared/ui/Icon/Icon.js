import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
export var Icon = memo(function (_a) {
    var className = _a.className, SVG = _a.SVG;
    return (_jsx(SVG, { className: classNames(cls.Icon, {}, [className]) }, void 0));
});

import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
export var Avatar = memo(function (_a) {
    var className = _a.className, src = _a.src, _b = _a.alt, alt = _b === void 0 ? '' : _b, size = _a.size;
    var styles = useMemo(function () { return ({
        width: size || 70,
        height: size || 70,
    }); }, [size]);
    return (_jsx("img", { src: src, alt: alt, style: styles, className: classNames(cls.Avatar, {}, [className]) }, void 0));
});

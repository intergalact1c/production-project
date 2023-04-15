import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
export var Skeleton = function (_a) {
    var className = _a.className, width = _a.width, height = _a.height, borderRadius = _a.borderRadius;
    var styles = {
        width: width,
        height: height,
        borderRadius: borderRadius,
    };
    return (_jsx("div", { className: classNames(cls.Skeleton, {}, [className]), style: styles }, void 0));
};

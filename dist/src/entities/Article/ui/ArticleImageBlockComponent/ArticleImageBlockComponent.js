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
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
export var ArticleImageBlockComponent = memo(function (_a) {
    var className = _a.className, block = _a.block;
    return (_jsx("div", __assign({ className: classNames(cls.ArticleImageBlockComponent, {}, [className]) }, { children: _jsxs("div", __assign({ className: cls.wrapper }, { children: [_jsx("img", { src: block.src, alt: block.title || '', className: cls.img }, void 0), block.title && _jsx(Text, { text: block.title, align: TextAlign.CENTER }, void 0)] }), void 0) }), void 0));
});

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
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
export var ArticleListItemSkeleton = memo(function (_a) {
    var className = _a.className, view = _a.view;
    if (view === ArticleView.LIST) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, { children: [_jsx("div", __assign({ className: cls.header }, { children: _jsx(Skeleton, { width: "100%", height: 130 }, void 0) }), void 0), _jsxs("div", __assign({ className: cls.body }, { children: [_jsx("div", __assign({ className: cls.image }, { children: _jsx(Skeleton, { width: "100%", height: "100%" }, void 0) }), void 0), _jsx(Skeleton, { width: "100%", height: 48 }, void 0)] }), void 0), _jsx("div", __assign({ className: cls.footer }, { children: _jsx(Skeleton, { width: "100%", height: 38 }, void 0) }), void 0)] }, void 0) }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, { children: [_jsx("div", __assign({ className: cls.header }, { children: _jsx("div", __assign({ className: cls.image }, { children: _jsx("div", __assign({ className: cls.inner }, { children: _jsx(Skeleton, { width: "100%", height: "100%" }, void 0) }), void 0) }), void 0) }), void 0), _jsxs("div", __assign({ className: cls.body }, { children: [_jsx("div", __assign({ className: cls.info }, { children: _jsx(Skeleton, { width: "100%", height: 24 }, void 0) }), void 0), _jsx(Skeleton, { width: "100%", height: 64 }, void 0)] }), void 0)] }, void 0) }), void 0));
});

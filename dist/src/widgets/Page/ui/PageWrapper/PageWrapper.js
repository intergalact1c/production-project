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
import { memo, useRef, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { getScrollRecoveryPath } from '../ScrollRecovery/model/selectors/scrollRecovery';
import { scrollRecoveryActions } from '../ScrollRecovery/model/slices/scrollRecoverySlice';
import cls from './PageWrapper.module.scss';
export var PAGE_ID = 'PAGE_ID';
export var PageWrapper = memo(function (_a) {
    var _b;
    var className = _a.className, children = _a.children, onScrollEnd = _a.onScrollEnd, _c = _a.isTriggerVisible, isTriggerVisible = _c === void 0 ? true : _c;
    var wrapperRef = useRef();
    var triggerRef = useRef();
    var dispatch = useAppDispatch();
    var pathname = useLocation().pathname;
    var scrollPosition = useSelector(function (state) { return getScrollRecoveryPath(state, pathname); });
    useInfiniteScroll({
        callback: onScrollEnd,
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
    });
    var onScroll = useThrottle(function (e) {
        // console.log('onScroll');
        dispatch(scrollRecoveryActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);
    useInitialEffect(function () {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    var mods = (_b = {},
        _b[cls.hide] = !isTriggerVisible,
        _b);
    return (_jsx("main", __assign({ id: PAGE_ID, ref: wrapperRef, className: classNames(cls.PageWrapper, {}, [className]), onScroll: onScroll }, { children: _jsxs("div", __assign({ className: cls.inner }, { children: [children, onScrollEnd ? _jsx("div", { className: classNames(cls.trigger, mods, []), ref: triggerRef }, void 0) : null] }), void 0) }), void 0));
});

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
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import cls from './CommentCard.module.scss';
export var CommentCard = memo(function (_a) {
    var className = _a.className, comment = _a.comment, isLoading = _a.isLoading;
    if (isLoading) {
        return (_jsxs("div", __assign({ className: classNames(cls.CommentCard, {}, [className, cls.loading]) }, { children: [_jsxs(HStack, __assign({ className: cls.header }, { children: [_jsx(Skeleton, { width: 30, height: 30, borderRadius: "50%", className: cls.avatar }, void 0), _jsx(Skeleton, { width: 100, height: 16 }, void 0)] }), void 0), _jsx(Skeleton, { width: "100%", height: 50 }, void 0)] }), void 0));
    }
    if (!comment) {
        return null;
    }
    return (_jsxs("div", __assign({ className: classNames(cls.CommentCard, {}, [className]) }, { children: [_jsxs(AppLink, __assign({ to: "".concat(RoutePath.profile).concat(comment.user.id), className: cls.header }, { children: [comment.user.avatar
                        ? _jsx(Avatar, { size: 30, className: cls.avatar, src: comment.user.avatar, alt: comment.user.login }, void 0)
                        : null, _jsx(Text, { title: comment.user.login }, void 0)] }), void 0), _jsx(Text, { text: comment.text }, void 0)] }), void 0));
});

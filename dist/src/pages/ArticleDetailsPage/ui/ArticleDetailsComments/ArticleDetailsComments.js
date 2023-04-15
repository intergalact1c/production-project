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
import { memo, Suspense, useCallback, useEffect, } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { addCommentFormArticle, } from '../../model/services/addCommentFormArticle/addCommentFormArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsComments.module.scss';
import { fetchCommentsByArticleId, } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
export var ArticleDetailsComments = memo(function (_a) {
    var className = _a.className, articleId = _a.articleId;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentFormArticle(text));
    }, [dispatch]);
    useEffect(function () {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(articleId));
        }
    }, [dispatch, articleId]);
    return (_jsxs("div", __assign({ className: classNames('', {}, [className]) }, { children: [_jsx(Text, { title: t('Комментарии'), className: cls.commentsTitle }, void 0), _jsx(Suspense, __assign({ fallback: "" }, { children: _jsx(AddCommentForm, { onSendComment: onSendComment }, void 0) }), void 0), _jsx(CommentList, { isLoading: commentsIsLoading, comments: comments }, void 0)] }), void 0));
});

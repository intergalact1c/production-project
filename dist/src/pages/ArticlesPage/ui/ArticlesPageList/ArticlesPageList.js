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
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleVirtualizedList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { articlesPageActions, getArticles } from '../../model/slices/ArticlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageView, } from '../../model/selectors/articlesPageSelectors';
export var ArticlesPageList = memo(function (_a) {
    var className = _a.className;
    var isLoading = useSelector(getArticlesPageIsLoading);
    var articles = useSelector(getArticles.selectAll);
    var view = useSelector(getArticlesPageView);
    var limit = useSelector(getArticlesPageLimit);
    var error = useSelector(getArticlesPageError);
    var t = useTranslation('articles').t;
    var dispatch = useAppDispatch();
    useEffect(function () {
        if (articles.length >= limit) {
            dispatch(articlesPageActions.setTriggerVisible(true));
        }
    }, [articles, dispatch, limit]);
    if (error) {
        return _jsx(Text, { text: t('Ошибка при загрузке статей') }, void 0);
    }
    return (_jsx("div", __assign({ className: classNames('', {}, [className]) }, { children: __PROJECT__ !== 'storybook' ? (_jsx(ArticleVirtualizedList, { isLoading: isLoading, articles: articles, view: view }, void 0)) : (_jsx(ArticleList, { isLoading: isLoading, articles: articles, view: view }, void 0)) }), void 0));
});

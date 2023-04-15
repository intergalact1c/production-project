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
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleSortSelector } from 'features/ArticleSortSelector/ArticleSortSelector';
import { ArticleViewSelector } from 'features/ArticleViewSelector/ArticleViewSelector';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs/ArticleTypeTabs';
import { HStack } from 'shared/ui/Stack';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { articlesPageActions } from '../../model/slices/ArticlesPageSlice';
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView, } from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPageFilters.module.scss';
export var ArticlesPageFilters = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation('articles').t;
    var view = useSelector(getArticlesPageView);
    var sort = useSelector(getArticlesPageSort);
    var order = useSelector(getArticlesPageOrder);
    var search = useSelector(getArticlesPageSearch);
    var type = useSelector(getArticlesPageType);
    var dispatch = useAppDispatch();
    var fetchData = useCallback(function () {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);
    var debouncedFetchData = useDebounce(fetchData, 500);
    var onChangeView = useCallback(function (view) {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    var onChangeOrder = useCallback(function (newOrder) {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeSort = useCallback(function (newSort) {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    var onChangeSearch = useCallback(function (search) {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);
    var onChangeType = useCallback(function (value) {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    return (_jsxs("div", __assign({ className: classNames('', {}, [className]) }, { children: [_jsxs(HStack, __assign({ justify: "between", className: cls.toolbar }, { children: [_jsx(ArticleSortSelector, { order: order, sort: sort, onChangeOrder: onChangeOrder, onChangeSort: onChangeSort }, void 0), _jsx(ArticleViewSelector, { view: view, onViewClick: onChangeView }, void 0)] }), void 0), _jsx(Card, __assign({ className: cls.search }, { children: _jsx(Input, { mwa: true, placeholder: t('Поиск'), onChange: onChangeSearch, value: search }, void 0) }), void 0), _jsx(ArticleTypeTabs, { value: type, onChangeType: onChangeType, className: cls.tabs }, void 0)] }), void 0));
});

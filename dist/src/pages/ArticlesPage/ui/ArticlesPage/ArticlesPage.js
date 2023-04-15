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
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { PageWrapper } from 'widgets/Page';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlesPageList } from '../../ui/ArticlesPageList/ArticlesPageList';
import { ArticlesPageFilters } from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { getArticlesPageTriggerVisible } from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer } from '../../model/slices/ArticlesPageSlice';
var reducers = {
    articlesPage: articlesPageReducer,
};
var ArticlesPage = function (_a) {
    var className = _a.className;
    var isTriggerVisible = useSelector(getArticlesPageTriggerVisible);
    var searchParams = useSearchParams()[0];
    var dispatch = useAppDispatch();
    var onLoadNextPart = useCallback(function () {
        dispatch(fetchNextArticles());
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(initArticlePage(searchParams));
    });
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: false }, { children: _jsxs(PageWrapper, __assign({ className: classNames('', {}, [className]), onScrollEnd: onLoadNextPart, isTriggerVisible: isTriggerVisible }, { children: [_jsx(ArticlesPageFilters, {}, void 0), _jsx(ArticlesPageList, {}, void 0)] }), void 0) }), void 0));
};
export default memo(ArticlesPage);

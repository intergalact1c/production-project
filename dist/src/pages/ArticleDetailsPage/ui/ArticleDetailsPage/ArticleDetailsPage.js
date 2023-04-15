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
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from 'widgets/Page';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsHeader } from '../../ui/ArticleDetailsHeader/ArticleDetailsHeader';
import { articleDetailsPageReducer } from '../../model/slices';
var reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
var ArticleDetailsPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var id = useParams().id;
    var articleId = __PROJECT__ !== 'storybook' ? id : '1';
    if (!articleId) {
        return (_jsx("div", __assign({ className: classNames('', {}, [className]) }, { children: t('Статья не найдена') }), void 0));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs(PageWrapper, __assign({ className: classNames('', {}, [className]) }, { children: [_jsx(ArticleDetailsHeader, {}, void 0), _jsx(ArticleDetails, { articleId: articleId }, void 0), _jsx(ArticleRecommendationsList, {}, void 0), _jsx(ArticleDetailsComments, { articleId: articleId }, void 0)] }), void 0) }), void 0));
};
export default memo(ArticleDetailsPage);

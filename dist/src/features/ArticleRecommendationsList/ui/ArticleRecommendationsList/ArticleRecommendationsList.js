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
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { useGetArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';
export var ArticleRecommendationsList = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var _a = useGetArticleRecommendationsList(6), articles = _a.data, isLoading = _a.isLoading, error = _a.error;
    if (isLoading || error || !articles) {
        return null;
    }
    return (_jsxs("div", __assign({ className: classNames('', {}, [className]) }, { children: [_jsx(Text, { title: t('Рекомендации'), className: cls.commentsTitle }, void 0), _jsx(ArticleList, { articles: articles, className: cls.recommendations, target: "_blank" }, void 0)] }), void 0));
});

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
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
var getSkeletons = function (view) { return new Array(view === ArticleView.TILE ? 20 : 4).fill(0).map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { view: view }, index)); }); };
export var ArticleList = memo(function (_a) {
    var className = _a.className, articles = _a.articles, isLoading = _a.isLoading, _b = _a.view, view = _b === void 0 ? ArticleView.TILE : _b, target = _a.target;
    var t = useTranslation('articles').t;
    var renderArticle = function (article) { return (_jsx(ArticleListItem, { article: article, view: view, target: target }, article.id)); };
    if (!isLoading && !articles.length) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: _jsx(Text, { size: TextSize.L, title: t('Статьи не найдены') }, void 0) }), void 0));
    }
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: [articles.length > 0
                ? articles.map(renderArticle)
                : null, isLoading && getSkeletons(view)] }), void 0));
});

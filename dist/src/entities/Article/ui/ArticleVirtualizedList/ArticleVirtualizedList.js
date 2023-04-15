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
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, WindowScroller, } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/PageWrapper/PageWrapper';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleVirtualizedList.module.scss';
var getSkeletons = function (view) { return new Array(view === ArticleView.TILE ? 8 : 4).fill(0).map(function (item, index) { return (_jsx(ArticleListItemSkeleton, { view: view }, index)); }); };
export var ArticleVirtualizedList = memo(function (_a) {
    var className = _a.className, articles = _a.articles, isLoading = _a.isLoading, _b = _a.view, view = _b === void 0 ? ArticleView.TILE : _b, target = _a.target;
    var t = useTranslation('articles').t;
    var containerRef = useRef();
    var isList = view === ArticleView.LIST;
    var articlesPerRow = isList ? 1 : 4;
    var rowCount = isList ? articles.length : Math.ceil(articles.length / articlesPerRow);
    var rowRender = function (_a) {
        var index = _a.index, key = _a.key, style = _a.style;
        var items = [];
        var fromIndex = index * articlesPerRow;
        var toIndex = Math.min(fromIndex + articlesPerRow, articles.length);
        for (var i = fromIndex; i < toIndex; i += 1) {
            items.push(_jsx(ArticleListItem, { article: articles[i], view: view, target: target }, articles[i].id));
        }
        return (_jsx("div", __assign({ style: style, className: classNames(cls.articlesRow, {}, []) }, { children: items }), key));
    };
    if (!isLoading && !articles.length) {
        return _jsx(Text, { size: TextSize.L, title: t('Статьи не найдены') }, void 0);
    }
    return (_jsx("div", __assign({ ref: containerRef }, { children: _jsx(WindowScroller
        // scrollElement={containerRef.current}
        , __assign({ 
            // scrollElement={containerRef.current}
            scrollElement: document.getElementById(PAGE_ID) }, { children: function (_a) {
                var height = _a.height, width = _a.width, registerChild = _a.registerChild, onChildScroll = _a.onChildScroll, isScrolling = _a.isScrolling, scrollTop = _a.scrollTop;
                return (_jsxs("div", __assign({ ref: registerChild, className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: [_jsx(List, { autoHeight: true, width: width || 1292, height: height || 546, rowCount: rowCount, rowHeight: isList ? 546 : 450, rowRenderer: rowRender, onScroll: onChildScroll, isScrolling: isScrolling, scrollTop: scrollTop }, void 0), isLoading && getSkeletons(view)] }), void 0));
            } }), void 0) }), void 0));
});

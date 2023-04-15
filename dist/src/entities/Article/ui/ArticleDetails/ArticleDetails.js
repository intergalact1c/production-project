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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize, TextTheme, } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleBlockType } from '../../model/types/article';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading, } from '../../model/selectors/articleDetails';
import { fetchArticlesById } from '../../model/services/fetchArticlesById/fetchArticlesById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import ViewsIcon from '../../../../shared/assets/icons/views.svg';
import CreatedAtIcon from '../../../../shared/assets/icons/created-at.svg';
var reducers = {
    articleDetails: articleDetailsReducer,
};
// Выносим из компонента ArticleDetails, чтобы не оборачивать в callback
var renderBlock = function (block) {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return _jsx(ArticleCodeBlockComponent, { className: cls.block, block: block }, block.id);
        case ArticleBlockType.IMAGE:
            return _jsx(ArticleImageBlockComponent, { className: cls.block, block: block }, block.id);
        case ArticleBlockType.TEXT:
            return _jsx(ArticleTextBlockComponent, { className: cls.block, block: block }, block.id);
        default:
            return null;
    }
};
export var ArticleDetails = memo(function (_a) {
    var className = _a.className, articleId = _a.articleId;
    var dispatch = useAppDispatch();
    var isLoading = useSelector(getArticleDetailsIsLoading);
    var data = useSelector(getArticleDetailsData);
    var error = useSelector(getArticleDetailsError);
    var t = useTranslation('article-details').t;
    useEffect(function () {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticlesById(articleId));
        }
    }, [dispatch, articleId]);
    var content;
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, height: 200, borderRadius: "50%" }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: 300, height: 32 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: 600, height: 24 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }, void 0)] }, void 0));
    }
    else if (error) {
        content = (_jsx(Text, { theme: TextTheme.ERROR, text: t('Произошла ошибка при загрузке статьи'), align: TextAlign.CENTER }, void 0));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx(Avatar, { className: cls.avatar, size: 200, src: data === null || data === void 0 ? void 0 : data.img }, void 0), _jsx(Text, { className: cls.mainText, title: data === null || data === void 0 ? void 0 : data.title, text: data === null || data === void 0 ? void 0 : data.subtitle, size: TextSize.L }, void 0), _jsxs("div", __assign({ className: cls.info }, { children: [_jsx(Icon, { SVG: ViewsIcon }, void 0), _jsx(Text, { text: String(data === null || data === void 0 ? void 0 : data.views) }, void 0)] }), void 0), _jsxs("div", __assign({ className: cls.info }, { children: [_jsx(Icon, { SVG: CreatedAtIcon }, void 0), _jsx(Text, { text: String(data === null || data === void 0 ? void 0 : data.createdAt) }, void 0)] }), void 0), data === null || data === void 0 ? void 0 : data.blocks.map(renderBlock)] }, void 0));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx("div", __assign({ className: classNames(cls.ArticleDetails, {}, [className]) }, { children: content }), void 0) }), void 0));
});

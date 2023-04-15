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
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsHeader.module.scss';
export var ArticleDetailsHeader = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var navigate = useNavigate();
    var canEdit = useSelector(getCanEditArticle);
    var article = useSelector(getArticleDetailsData);
    var onEditArticle = useCallback(function () {
        navigate("".concat(RoutePath.article_details).concat(article === null || article === void 0 ? void 0 : article.id, "/edit"));
    }, [article === null || article === void 0 ? void 0 : article.id, navigate]);
    var onBackToList = useCallback(function () {
        navigate(RoutePath.articles);
    }, [navigate]);
    return (_jsxs(HStack, __assign({ justify: "end", className: classNames(cls.ArticleDetailsHeader, {}, [className]) }, { children: [canEdit && (_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onEditArticle, className: cls.bth }, { children: t('Редактировать') }), void 0)), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onBackToList, className: cls.bth }, { children: t('Назад') }), void 0)] }), void 0));
});

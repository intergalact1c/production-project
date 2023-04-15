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
import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from 'entities/Article/model/types/article';
import cls from './ArticleSortSelector.module.scss';
export var ArticleSortSelector = memo(function (_a) {
    var className = _a.className, sort = _a.sort, order = _a.order, onChangeOrder = _a.onChangeOrder, onChangeSort = _a.onChangeSort;
    var dispatch = useAppDispatch();
    var t = useTranslation('articles').t;
    var sortFieldOptions = useMemo(function () { return [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ]; }, [t]);
    var orderOptions = useMemo(function () { return [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ]; }, [t]);
    /*
        // onChange={onChangeSort} TS2322: Type '(newSort: ArticleSortField) => void' is not assignable to type '(value: string) => void'.
        // Костыльный вариант
        const changeSortHandler = useCallback((newSort: string) => {
            onChangeSort(newSort as ArticleSortField);
        }, [onChangeSort]);

        const changeOrderHandler = useCallback((newOrder: string) => {
            onChangeOrder(newOrder as SortOrder);
        }, [onChangeOrder]);
    */
    return (_jsxs("div", __assign({ className: classNames(cls.ArticlesPageFilters, {}, [className]) }, { children: [_jsx(Select, { mwa: true, label: t('Сортировать по'), selectId: "sort", options: sortFieldOptions, value: sort, onChange: onChangeSort }, void 0), _jsx(Select, { mwa: true, label: t('Упорядочить по'), selectId: "order", options: orderOptions, value: order, onChange: onChangeOrder }, void 0)] }), void 0));
});

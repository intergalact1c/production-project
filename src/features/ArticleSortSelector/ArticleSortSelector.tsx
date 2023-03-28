import React, { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(({
    className, sort, order, onChangeOrder, onChangeSort,
}: ArticlesPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('articles');

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
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
    ], [t]);

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

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

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <Select
                mwa
                label={t('Сортировать по')}
                selectId="sort"
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                mwa
                label={t('Упорядочить по')}
                selectId="order"
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});

import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/Text/Text';
import { articlesPageActions, getArticles } from '../../model/slices/ArticlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageListProps {
    className?: string;
}

export const ArticlesPageList = memo(({ className }: ArticlesPageListProps) => {
    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const limit = useSelector(getArticlesPageLimit);
    const error = useSelector(getArticlesPageError);
    const { t } = useTranslation('articles');

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (articles.length >= limit) {
            dispatch(articlesPageActions.setTriggerVisible(true));
        }
    }, [articles, dispatch, limit]);

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                articles={articles}
                view={view}
            />
        </div>
    );
});

import React, {
    memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { PageWrapper } from 'widgets/Page';
import { useSearchParams } from 'react-router-dom';
import { ArticleList, ArticleVirtualizedList } from 'entities/Article';
import { ArticlesPageFilters } from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import {
    getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNumber,
    getArticlesPageTriggerVisible,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/ArticlesPageSlice';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();
    const isTriggerVisible = useSelector(getArticlesPageTriggerVisible);
    const limit = useSelector(getArticlesPageLimit);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    useEffect(() => {
        if (articles.length >= limit) {
            dispatch(articlesPageActions.setTriggerVisible(true));
        }
    }, [articles, dispatch, limit]);

    useInitialEffect(() => {
        dispatch(initArticlePage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper
                className={classNames('', {}, [className])}
                onScrollEnd={onLoadNextPart}
                isTriggerVisible={isTriggerVisible}
            >
                <ArticlesPageFilters />
                {__PROJECT__ !== 'storybook' ? (
                    <ArticleVirtualizedList
                        isLoading={isLoading}
                        articles={articles}
                        view={view}
                    />
                ) : (
                    <ArticleList
                        isLoading={isLoading}
                        articles={articles}
                        view={view}
                    />
                )}
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

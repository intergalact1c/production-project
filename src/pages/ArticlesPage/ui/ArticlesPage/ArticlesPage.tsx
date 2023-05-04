import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from '@/widgets/Page';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlesPageList } from '../../ui/ArticlesPageList/ArticlesPageList';
import { ArticlesPageFilters } from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { getArticlesPageTriggerVisible } from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer } from '../../model/slices/ArticlesPageSlice';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const isTriggerVisible = useSelector(getArticlesPageTriggerVisible);
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlePage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper
                className={classNames('', {}, [className])}
                onScrollEnd={onLoadNextPart}
                isTriggerVisible={isTriggerVisible}
                data-testid="ArticlesPage"
            >
                <ArticlesPageFilters />
                <ArticlesPageList />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

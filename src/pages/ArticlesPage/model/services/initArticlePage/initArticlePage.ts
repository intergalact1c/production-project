import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';

export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articles/initArticlePage',
    async (searchParams, thunkApi) => {
        const {
            getState, dispatch,
        } = thunkApi;

        const inited = getArticlesPageInited(getState()); // const inited = useSelector(getArticlesPageInited)

        if (!inited) {
            const orderFromURL = searchParams.get('order') as SortOrder;
            const sortFromURL = searchParams.get('sort') as ArticleSortField;
            const searchFromURL = searchParams.get('search');
            const typeFromURL = searchParams.get('type') as ArticleType;

            if (orderFromURL) {
                dispatch(articlesPageActions.setOrder(orderFromURL));
            }

            if (sortFromURL) {
                dispatch(articlesPageActions.setSort(sortFromURL));
            }

            if (searchFromURL) {
                dispatch(articlesPageActions.setSearch(searchFromURL));
            }

            if (typeFromURL) {
                dispatch(articlesPageActions.setType(typeFromURL));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticles({}));
        }
    },
);

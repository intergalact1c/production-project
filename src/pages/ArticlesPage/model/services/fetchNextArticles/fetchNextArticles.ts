import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import {
    getArticlesPageHasMore, getArticlesPageIsLoading,
    getArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articles/fetchNextArticles',
    async (_, thunkApi) => {
        const {
            getState, dispatch,
        } = thunkApi;

        const pageNumber = getArticlesPageNumber(getState());
        const hasMore = getArticlesPageHasMore(getState()); // по-хорошему этот флаг должен возвращать бекенд
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(pageNumber + 1));
            dispatch(fetchArticles({}));
        }
    },
);

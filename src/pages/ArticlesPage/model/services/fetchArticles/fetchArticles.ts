import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import {
    getArticlesPageLimit, getArticlesPageNumber,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesProps {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        // const { page = 1 } = props;
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNumber(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user', // для аватара пользователя
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);

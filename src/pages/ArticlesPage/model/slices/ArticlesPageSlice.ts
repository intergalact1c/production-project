import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    Article, ArticleType, ArticleView, ArticleSortField,
} from 'entities/Article';
import { ARTICLES_VIEW_LS_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        view: ArticleView.TILE,
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 8,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
        isTriggerVisible: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            const view = action.payload;
            state.view = view;
            // state.limit = view === ArticleView.LIST ? 4 : 9;
            localStorage.setItem(ARTICLES_VIEW_LS_KEY, view);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setTriggerVisible: (state, action: PayloadAction<boolean>) => {
            state.isTriggerVisible = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LS_KEY) as ArticleView;
            state.view = view;
            // state.limit = view === ArticleView.LIST ? 4 : 9;
            state.limit = 8;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                state.isTriggerVisible = false;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;
                // console.log(state.limit);
                // console.log(action.payload.length);
                // console.log(state.ids.length);

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload); // заменяем все данные
                } else {
                    articlesAdapter.addMany(state, action.payload); // addMany - добавляем новые данные в конец
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
                state.isTriggerVisible = true;
            });
    },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice;

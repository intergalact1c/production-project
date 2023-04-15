import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleType, ArticleView, ArticleSortField, } from 'entities/Article';
import { ARTICLES_VIEW_LS_KEY } from 'shared/const/localStorage';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
var articlesAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; },
});
export var getArticles = articlesAdapter.getSelectors(function (state) { return state.articlesPage || articlesAdapter.getInitialState(); });
var articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState({
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
        setView: function (state, action) {
            var view = action.payload;
            state.view = view;
            // state.limit = view === ArticleView.LIST ? 4 : 9;
            localStorage.setItem(ARTICLES_VIEW_LS_KEY, view);
        },
        setPage: function (state, action) {
            state.page = action.payload;
        },
        setOrder: function (state, action) {
            state.order = action.payload;
        },
        setSort: function (state, action) {
            state.sort = action.payload;
        },
        setSearch: function (state, action) {
            state.search = action.payload;
        },
        setType: function (state, action) {
            state.type = action.payload;
        },
        setTriggerVisible: function (state, action) {
            state.isTriggerVisible = action.payload;
        },
        initState: function (state) {
            var view = localStorage.getItem(ARTICLES_VIEW_LS_KEY);
            state.view = view;
            // state.limit = view === ArticleView.LIST ? 4 : 9;
            state.limit = 8;
            state._inited = true;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticles.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
            state.isTriggerVisible = false;
            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        })
            .addCase(fetchArticles.fulfilled, function (state, action) {
            state.isLoading = false;
            state.hasMore = action.payload.length >= state.limit;
            // console.log(state.limit);
            // console.log(action.payload.length);
            // console.log(state.ids.length);
            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload); // заменяем все данные
            }
            else {
                articlesAdapter.addMany(state, action.payload); // addMany - добавляем новые данные в конец
            }
        })
            .addCase(fetchArticles.rejected, function (state, action) {
            state.error = action.payload;
            state.isLoading = false;
            state.isTriggerVisible = true;
        });
    },
});
export var articlesPageActions = articlesPageSlice.actions, articlesPageReducer = articlesPageSlice.reducer;

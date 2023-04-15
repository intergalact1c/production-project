import { createEntityAdapter, createSlice, } from '@reduxjs/toolkit';
import { fetchArticleRecommendations, } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
var recommendationsAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; }, // Функция получения id (поле, по которому будет идти нормализация)
});
// Создаем селектор комментариев
export var getArticleRecommendations = recommendationsAdapter.getSelectors(function (state) { var _a; return ((_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) || recommendationsAdapter.getInitialState(); });
var articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleRecommendations.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchArticleRecommendations.fulfilled, function (state, action) {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload);
        })
            .addCase(fetchArticleRecommendations.rejected, function (state, action) {
            state.error = action.payload; // ошибка с сервера
            state.isLoading = false;
        });
    },
});
export var articleDetailsRecommendationsReducer = articleDetailsRecommendationsSlice.reducer;

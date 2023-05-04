import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id, // Функция получения id (поле, по которому будет идти нормализация)
});

// Создаем селектор комментариев
export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState:
        recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.error = action.payload; // ошибка с сервера
                state.isLoading = false;
            });
    },
});

export const { reducer: articleDetailsRecommendationsReducer } =
    articleDetailsRecommendationsSlice;

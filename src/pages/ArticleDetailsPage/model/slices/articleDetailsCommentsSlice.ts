import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { CommentType } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id, // Функция получения id (поле, по которому будет идти нормализация)
});

// Создаем селектор комментариев
export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.comments || commentAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<CommentType[]>) => {
                    state.isLoading = false;
                    commentAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload; // ошибка с сервера
                state.isLoading = false;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } =
    articleDetailsCommentsSlice;

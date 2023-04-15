import { createEntityAdapter, createSlice, } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
var commentAdapter = createEntityAdapter({
    selectId: function (comment) { return comment.id; }, // Функция получения id (поле, по которому будет идти нормализация)
});
// Создаем селектор комментариев
export var getArticleComments = commentAdapter.getSelectors(function (state) { var _a; return ((_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) || commentAdapter.getInitialState(); });
var articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchCommentsByArticleId.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchCommentsByArticleId.fulfilled, function (state, action) {
            state.isLoading = false;
            commentAdapter.setAll(state, action.payload);
        })
            .addCase(fetchCommentsByArticleId.rejected, function (state, action) {
            state.error = action.payload; // ошибка с сервера
            state.isLoading = false;
        });
    },
});
export var articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;

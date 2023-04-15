import { createSlice } from '@reduxjs/toolkit';
import { fetchArticlesById } from '../../model/services/fetchArticlesById/fetchArticlesById';
var initialState = {
    isLoading: false,
    error: undefined,
    data: undefined,
};
export var articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticlesById.pending, function (state) {
            state.isLoading = true;
            state.error = undefined;
        })
            .addCase(fetchArticlesById.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
        })
            .addCase(fetchArticlesById.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var articleDetailsActions = articleDetailsSlice.actions;
export var articleDetailsReducer = articleDetailsSlice.reducer;

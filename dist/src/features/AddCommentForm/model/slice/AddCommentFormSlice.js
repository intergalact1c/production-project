import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    text: '',
};
export var addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        },
    },
    /* extraReducers: (builder) => {
        builder;
        .addCase(fetchUserByLogin.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUserByLogin.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(fetchUserByLogin.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }, */
});
export var addCommentFormActions = addCommentFormSlice.actions;
export var addCommentFormReducer = addCommentFormSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from 'features/AddCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
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

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;

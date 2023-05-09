import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRecoverySchema } from '../types/scrollRecoverySchema';

const initialState: ScrollRecoverySchema = {
    scroll: {},
};

const scrollRecoverySlice = createSlice({
    name: 'scrollRecoverySlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollRecoveryActions } = scrollRecoverySlice;
export const { reducer: scrollRecoveryReducer } = scrollRecoverySlice;

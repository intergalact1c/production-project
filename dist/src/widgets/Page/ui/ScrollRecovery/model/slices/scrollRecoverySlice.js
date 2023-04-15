import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scroll: {},
};
var scrollRecoverySlice = createSlice({
    name: 'scrollRecoverySlice',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.scroll[payload.path] = payload.position;
        },
    },
});
export var scrollRecoveryActions = scrollRecoverySlice.actions;
export var scrollRecoveryReducer = scrollRecoverySlice.reducer;

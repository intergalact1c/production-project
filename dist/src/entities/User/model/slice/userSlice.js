import { createSlice } from '@reduxjs/toolkit';
import { USER_LS_KEY } from 'shared/const/localStorage';
var initialState = {
    _inited: false,
};
export var userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAuthData: function (state, action) {
            state.authData = action.payload;
        },
        initAuthData: function (state) {
            var user = localStorage.getItem(USER_LS_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: function (state) {
            state.authData = undefined;
            localStorage.removeItem(USER_LS_KEY);
        },
    },
});
export var userActions = userSlice.actions;
export var userReducer = userSlice.reducer;

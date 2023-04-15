import { createSlice } from '@reduxjs/toolkit';
import { fetchUserByLogin } from '../services/fetchUserByLogin/fetchUserByLogin';
var initialState = {
    login: '',
    password: '',
    isLoading: false,
};
export var loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setLogin: function (state, action) {
            state.login = action.payload;
        },
        setPassword: function (state, action) {
            state.password = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchUserByLogin.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchUserByLogin.fulfilled, function (state, action) {
            state.isLoading = false;
        })
            .addCase(fetchUserByLogin.rejected, function (state, action) {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});
export var loginActions = loginSlice.actions;
export var loginReducer = loginSlice.reducer;

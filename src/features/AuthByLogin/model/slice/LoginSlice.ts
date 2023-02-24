import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { fetchUserByLogin } from '../services/fetchUserByLogin/fetchUserByLogin';

const initialState: LoginSchema = {
    login: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
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
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

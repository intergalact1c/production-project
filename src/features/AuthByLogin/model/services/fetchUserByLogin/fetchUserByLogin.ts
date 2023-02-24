import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'i18next';
import { USER_LS_KEY } from 'shared/const/localStorage';

interface fetchUserByLoginProps {
    login: string;
    password: string;
}

export const fetchUserByLogin = createAsyncThunk<User, fetchUserByLoginProps, { rejectValue: string }>(
    'login/fetchUserByLogin',
    async (loginData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', loginData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);

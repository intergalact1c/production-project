import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LS_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface fetchUserByLoginProps {
    login: string;
    password: string;
}

export const fetchUserByLogin = createAsyncThunk<User, fetchUserByLoginProps, ThunkConfig<string>>(
    'login/fetchUserByLogin',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate?.(`${RoutePath.profile}${response.data.id}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

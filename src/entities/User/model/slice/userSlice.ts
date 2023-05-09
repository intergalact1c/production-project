import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LS_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            // Редьюсер - чистая функция. Нужно избегать сайд эффектов. В случае с локальным хранилищем - допустимо.
            localStorage.setItem(USER_LS_KEY, JSON.stringify(action.payload.id));
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LS_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(saveJsonSettings.fulfilled, (state, { payload }: PayloadAction<JsonSettings>) => {
            if (state.authData) {
                state.authData.jsonSettings = payload;
            }
        });
        builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
            state.authData = payload;
            setFeatureFlags(payload.features);
            state._inited = true;
        });
        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true;
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

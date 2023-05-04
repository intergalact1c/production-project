import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/EditableProfileCardSchema';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined; // ошибка с сервера
                state.isLoading = true;
            })
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                },
            )
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload; // ошибка с сервера
                state.isLoading = false;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined; // ошибки валидации
                state.isLoading = true;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.readonly = true;
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                    state.validateErrors = undefined; // ошибки валидации
                },
            )
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validateErrors = action.payload; // ошибки валидации
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

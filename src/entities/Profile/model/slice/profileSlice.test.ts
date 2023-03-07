import { ProfileSchema, updateProfileData, ValidateProfileError } from 'entities/Profile';
import AvatarImg from 'shared/assets/tests/avatar.png';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'Имя',
    lastname: 'Фамилия',
    age: 19,
    city: 'Город',
    login: 'Логин',
    avatar: AvatarImg,
    currency: Currency.RUB,
    country: Country.Russia,
};

describe('profileSlice', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(false),
        )).toEqual({ readonly: false });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { login: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true, data, form: data, validateErrors: undefined,
        });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { login: 'admin' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ login: 'super_admin' }),
        )).toEqual({
            form: { login: 'super_admin' },
        });
    });

    // extra reducers
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});

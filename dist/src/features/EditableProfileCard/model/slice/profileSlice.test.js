import AvatarImg from 'shared/assets/tests/avatar.png';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
var data = {
    first: 'Имя',
    lastname: 'Фамилия',
    age: 19,
    city: 'Город',
    login: 'Логин',
    avatar: AvatarImg,
    currency: Currency.RUB,
    country: Country.Russia,
};
describe('profileSlice', function () {
    test('test setReadonly', function () {
        var state = { readonly: true };
        expect(profileReducer(state, profileActions.setReadonly(false))).toEqual({ readonly: false });
    });
    test('test cancelEdit', function () {
        var state = { data: data, form: { login: '' } };
        expect(profileReducer(state, profileActions.cancelEdit())).toEqual({
            readonly: true,
            data: data,
            form: data, validateErrors: undefined,
        });
    });
    test('test updateProfile', function () {
        var state = { form: { login: 'admin' } };
        expect(profileReducer(state, profileActions.updateProfile({ login: 'super_admin' }))).toEqual({
            form: { login: 'super_admin' },
        });
    });
    // extra reducers
    test('test update profile service pending', function () {
        var state = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile service fulfilled', function () {
        var state = {
            isLoading: true,
        };
        expect(profileReducer(state, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data: data,
        });
    });
});

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from '../../../../../shared/assets/tests/avatar.png';
import { getProfileForm } from './getProfileForm';
describe('getProfileForm', function () {
    test('should return data', function () {
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
        var state = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state)).toEqual(data);
    });
    test('should return empty state', function () {
        var state = {};
        expect(getProfileForm(state)).toEqual(undefined);
    });
});

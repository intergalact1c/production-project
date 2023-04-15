import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from '../../../../../shared/assets/tests/avatar.png';
import { getProfileData } from './getProfileData';
describe('getProfileData', function () {
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
                data: data,
            },
        };
        expect(getProfileData(state)).toEqual(data);
    });
    test('should return empty state', function () {
        var state = {};
        expect(getProfileData(state)).toEqual(undefined);
    });
});

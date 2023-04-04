import AvatarImg from 'shared/assets/tests/avatar.png';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData', () => {
    test('valid data', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('incorrect user data', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect currency', async () => {
        const result = validateProfileData({ ...data, currency: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AVATAR,
            ValidateProfileError.INCORRECT_LOGIN,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CURRENCY,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});

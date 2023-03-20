import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    INCORRECT_LOGIN = 'INCORRECT_LOGIN',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR', // серверная ошибка при сохранении
}

export interface Profile {
    id?: string,
    'first'?: string,
    'lastname'?: string,
    'age'?: number,
    'currency'?: Currency,
    'country'?: Country,
    'city'?: string,
    'login'?: string,
    'avatar'?: string,
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateErrors?: ValidateProfileError[],
}

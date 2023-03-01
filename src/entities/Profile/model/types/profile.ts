import { Country, Currency } from 'shared/const/commot';

export interface Profile {
    'first': string,
    'lastname': string,
    'age': number,
    'currency': Currency,
    'country': Country,
    'city': string,
    'login': string,
    'avatar': string,
}

export interface ProfileSchema {
    data: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
}

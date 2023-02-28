import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginFormLogin } from './getLoginFormLogin';

describe('getLoginFormLogin', () => {
    test('should return login', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                login: 'username',
            },
        };
        expect(getLoginFormLogin(state as StateSchema)).toEqual('username');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginFormLogin(state as StateSchema)).toEqual('');
    });
});

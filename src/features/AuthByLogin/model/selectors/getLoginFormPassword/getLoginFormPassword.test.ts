import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginFormPassword } from './getLoginFormPassword';

describe('getLoginFormPassword', () => {
    test('should return login', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginFormPassword(state as StateSchema)).toEqual('password');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginFormPassword(state as StateSchema)).toEqual('');
    });
});

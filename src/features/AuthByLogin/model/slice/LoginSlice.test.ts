import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './LoginSlice';

describe('loginSlice', () => {
    test('test set login', () => {
        const state: DeepPartial<LoginSchema> = { login: '123' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setLogin('123123')),
        ).toEqual({ login: '123123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123123'),
            ),
        ).toEqual({ password: '123123' });
    });
});

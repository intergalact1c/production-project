import { loginActions, loginReducer } from './LoginSlice';
describe('loginSlice', function () {
    test('test set login', function () {
        var state = { login: '123' };
        expect(loginReducer(state, loginActions.setLogin('123123'))).toEqual({ login: '123123' });
    });
    test('test set password', function () {
        var state = { password: '123' };
        expect(loginReducer(state, loginActions.setPassword('123123'))).toEqual({ password: '123123' });
    });
});

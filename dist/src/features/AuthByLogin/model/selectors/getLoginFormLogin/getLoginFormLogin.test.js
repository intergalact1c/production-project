import { getLoginFormLogin } from './getLoginFormLogin';
describe('getLoginFormLogin', function () {
    test('should return login', function () {
        var state = {
            loginForm: {
                login: 'username',
            },
        };
        expect(getLoginFormLogin(state)).toEqual('username');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginFormLogin(state)).toEqual('');
    });
});

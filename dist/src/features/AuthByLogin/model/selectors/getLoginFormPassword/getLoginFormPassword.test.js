import { getLoginFormPassword } from './getLoginFormPassword';
describe('getLoginFormPassword', function () {
    test('should return login', function () {
        var state = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginFormPassword(state)).toEqual('password');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginFormPassword(state)).toEqual('');
    });
});

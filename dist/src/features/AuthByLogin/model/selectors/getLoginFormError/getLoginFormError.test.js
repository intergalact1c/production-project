import { getLoginFormError } from './getLoginFormError';
describe('getLoginFormError', function () {
    test('should return error', function () {
        var state = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginFormError(state)).toEqual('error');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginFormError(state)).toEqual(undefined);
    });
});

import { getLoginFormLoading } from './getLoginFormLoading';
describe('getLoginFormLoading', function () {
    test('should return true', function () {
        var state = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginFormLoading(state)).toEqual(true);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginFormLoading(state)).toEqual(false);
    });
});

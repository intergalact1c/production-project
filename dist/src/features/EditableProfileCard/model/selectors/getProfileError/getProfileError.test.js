import { getProfileError } from './getProfileError';
describe('getProfileError', function () {
    test('should return data', function () {
        var state = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state)).toEqual('error');
    });
    test('should return empty state', function () {
        var state = {};
        expect(getProfileError(state)).toEqual(undefined);
    });
});

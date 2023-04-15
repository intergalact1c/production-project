import { getProfileIsLoading } from './getProfileIsLoading';
describe('getProfileIsLoading', function () {
    test('should return data', function () {
        var state = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state)).toEqual(true);
    });
    test('should return empty state', function () {
        var state = {};
        expect(getProfileIsLoading(state)).toEqual(undefined);
    });
});

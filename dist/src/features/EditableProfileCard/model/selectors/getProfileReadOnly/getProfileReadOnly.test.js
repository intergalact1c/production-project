import { getProfileReadOnly } from './getProfileReadOnly';
describe('getProfileReadOnly', function () {
    test('should return data', function () {
        var state = {
            profile: {
                readonly: false,
            },
        };
        expect(getProfileReadOnly(state)).toEqual(false);
    });
    test('should return empty state', function () {
        var state = {};
        expect(getProfileReadOnly(state)).toEqual(undefined);
    });
});

import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';
describe('getProfileValidateErrors', function () {
    test('should return data', function () {
        var state = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR],
            },
        };
        expect(getProfileValidateErrors(state)).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('should return empty state', function () {
        var state = {};
        expect(getProfileValidateErrors(state)).toEqual(undefined);
    });
});

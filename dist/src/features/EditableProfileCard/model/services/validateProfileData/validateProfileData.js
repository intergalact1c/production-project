import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
export var validateProfileData = function (profile) {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    var first = profile.first, lastname = profile.lastname, country = profile.country, avatar = profile.avatar, currency = profile.currency, age = profile.age, login = profile.login, city = profile.city;
    var errors = [];
    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!avatar) {
        errors.push(ValidateProfileError.INCORRECT_AVATAR);
    }
    if (!login) {
        errors.push(ValidateProfileError.INCORRECT_LOGIN);
    }
    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!currency) {
        errors.push(ValidateProfileError.INCORRECT_CURRENCY);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    return errors;
};

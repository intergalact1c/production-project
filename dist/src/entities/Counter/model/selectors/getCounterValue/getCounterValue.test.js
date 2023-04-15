import { getCounterValue } from './getCounterValue';
describe('getCounterValue', function () {
    // Проверяем, что селектор вернет значение 10
    test('', function () {
        var state = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});

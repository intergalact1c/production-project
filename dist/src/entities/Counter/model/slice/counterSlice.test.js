import { counterReducer, counterActions } from './counterSlice';
describe('counterSlice', function () {
    test('increment', function () {
        var state = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('decrement', function () {
        var state = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('should work with empty state', function () {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});

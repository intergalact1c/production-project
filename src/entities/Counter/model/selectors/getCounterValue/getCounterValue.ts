import { buildSelector } from '@/shared/lib/store';

// export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value);
// useCounterValue - используем в async thunk, хелперах
// getCounterValue - используем в компонентах
export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);

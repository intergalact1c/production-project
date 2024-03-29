import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginFormLoading } from './getLoginFormLoading';

describe('getLoginFormLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginFormLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginFormLoading(state as StateSchema)).toEqual(false);
    });
});

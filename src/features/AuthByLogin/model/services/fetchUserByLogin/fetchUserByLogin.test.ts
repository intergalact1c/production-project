import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { userActions } from 'entities/User';
import { fetchUserByLogin } from './fetchUserByLogin';

describe('fetchUserByLogin', () => {
    test('success login', async () => {
        const userValue = { id: '1', login: 'login' };

        const thunk = new TestAsyncThunk(fetchUserByLogin);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.CallThunk({ login: 'login', password: 'password' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue)); // проверка на то, что dispatch был вызван с аргументом userValue
        expect(thunk.dispatch).toHaveBeenCalledTimes(3); // проверка на то, что dispatch был вызван 3 раза:
        // 1 раз - когда вызвали сам action fetchUserByLogin (pending)
        // 2 раз - когда вызвали dispatch с action setAuthData (24 строка fetchUserByLogin.ts)
        // 3 раз - когда происходит fulfilled и мы делаем return на 27 строке fetchUserByLogin.ts
        expect(thunk.api.post).toHaveBeenCalled(); // проверка на то, что метод post вызвался
        expect(result.meta.requestStatus).toBe('fulfilled'); // проверка на то, что AsyncThunk отработал без ошибки
        expect(result.payload).toEqual(userValue); // проверка на то, что возвращаются данные о пользователе
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchUserByLogin);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.CallThunk({ login: 'login', password: 'password' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // т.к. не вызывается промежуточный dispatch в 24 строке fetchUserByLogin.ts
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticles } from './fetchNextArticles';
import { fetchArticles } from '../fetchArticles/fetchArticles';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticles', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            // initialState
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.CallThunk();

        expect(thunk.dispatch).toBeCalledTimes(4); // dispatch вызвался 4 раза:
        // 1 раз - когда вызвали сам action fetchNextArticles с initialState (pending)
        // 2 раз - запрос успешно выполнился и вернулось состояние fulfilled
        // 3 и 4 разы - вызвали внутри самого action (22,23 строки файла fetchNextArticles)
        // expect(fetchArticles).toHaveBeenCalledWith({ page: 3 }); // page: 2 + 1
    });
    test('fetchNextArticles not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.CallThunk();

        expect(thunk.dispatch).toBeCalledTimes(2); // dispatch вызвался 2 раза:
        // 1 раз - когда вызвали сам action fetchNextArticles с initialState (pending)
        // 2 раз - запрос успешно выполнился и вернулось состояние fulfilled
        // не будет двух вызовов (22,23 строки файла fetchNextArticles)
        expect(fetchArticles).not.toHaveBeenCalled();
    });
});

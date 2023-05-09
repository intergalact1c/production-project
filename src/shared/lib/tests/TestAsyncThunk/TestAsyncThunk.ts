import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>, // инициализируем стейт для теста updateProfileData
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema); // инициализируем стейт для теста updateProfileData

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async CallThunk(arg: Arg) {
        const action = this.actionCreator(arg); // вызываем action
        const result = await action(
            // возвращается асинхронный action
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate,
            },
        );

        return result;
    }
}

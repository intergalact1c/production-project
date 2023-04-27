import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
// .../toolkit/src/createSlice - отсюда забирать типы нельзя
// .../toolkit/dist - билдится редакс
import { SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit/dist';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
    >(options: CreateSliceOptions<State, CaseReducers, Name>) {
    // Проксируем options из buildSlice в функцию createSlice (для того, чтобы правильно подхватились типы)
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();

        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        ...slice, // reducer, getInitialState, actions ...
        useActions,
    };
}

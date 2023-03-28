import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollRecovery = (state: StateSchema) => state.scrollRecovery.scroll;
export const getScrollRecoveryPath = createSelector(
    getScrollRecovery,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);

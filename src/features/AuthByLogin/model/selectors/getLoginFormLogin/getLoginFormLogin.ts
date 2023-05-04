import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginFormLogin = (state: StateSchema) =>
    state?.loginForm?.login || '';

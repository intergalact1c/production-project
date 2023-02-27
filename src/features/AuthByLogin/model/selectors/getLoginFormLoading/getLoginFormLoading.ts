import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginFormLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;

import axios from 'axios';
import { USER_LS_KEY } from 'shared/const/localStorage';

// const baseURL = __IS_DEV__ ? 'http://localhost:8000' : '';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LS_KEY) || 'someAuthData',
    },
});

import axios from 'axios';
import { USER_LS_KEY } from 'shared/const/localStorage';
// const baseURL = __IS_DEV__ ? 'http://localhost:8000' : '';
export var $api = axios.create({
    baseURL: __API__,
});
$api.interceptors.request.use(function (config) {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LS_KEY) || '';
    }
    return config;
});

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { getLoginFormPassword } from '../../model/selectors/getLoginFormPassword/getLoginFormPassword';
import { getLoginFormLoading } from '../../model/selectors/getLoginFormLoading/getLoginFormLoading';
import { getLoginFormError } from '../../model/selectors/getLoginFormError/getLoginFormError';
import { getLoginFormLogin } from '../../model/selectors/getLoginFormLogin/getLoginFormLogin';
import { fetchUserByLogin } from '../../model/services/fetchUserByLogin/fetchUserByLogin';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';
var initialReducers = {
    loginForm: loginReducer,
};
var LoginForm = memo(function (_a) {
    var className = _a.className, onSuccess = _a.onSuccess;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var login = useSelector(getLoginFormLogin);
    var password = useSelector(getLoginFormPassword);
    var isLoading = useSelector(getLoginFormLoading);
    var error = useSelector(getLoginFormError);
    var navigate = useNavigate();
    var onChangeLogin = useCallback(function (value) {
        dispatch(loginActions.setLogin(value));
    }, [dispatch]);
    var onChangePassword = useCallback(function (value) {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    var onLoginClick = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(fetchUserByLogin({ login: login, password: password }))];
                case 1:
                    result = _a.sent();
                    if (result.meta.requestStatus === 'fulfilled') {
                        onSuccess();
                        user = result.payload;
                        navigate("".concat(RoutePath.profile).concat(user.id));
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [dispatch, login, password, onSuccess, navigate]);
    useEffect(function () {
        var onKeyDown = function (e) {
            if (e.key === 'Enter') {
                onLoginClick();
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return function () {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onLoginClick, login, password]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: initialReducers, removeAfterUnmount: true }, { children: _jsxs("div", __assign({ className: classNames(cls.LoginForm, {}, [className]) }, { children: [_jsx(Text, { title: t('Форма авторизации'), className: cls.loginFormTitle }, void 0), _jsx(Input, { autoFocus: true, placeholder: t('Логин'), value: login, onChange: onChangeLogin, className: cls.loginFormInput }, void 0), _jsx(Input, { placeholder: t('Пароль'), value: password, onChange: onChangePassword, className: cls.loginFormInput }, void 0), error && (_jsx(Text, { text: t('Неверный логин или пароль'), theme: TextTheme.ERROR, className: cls.loginFormError }, void 0)), _jsx(Button, __assign({ disabled: isLoading, theme: ButtonTheme.BACKGROUND_INVERTED, className: cls.loginFormBtn, onClick: onLoginClick }, { children: t('Войти') }), void 0)] }), void 0) }), void 0));
});
export default LoginForm;

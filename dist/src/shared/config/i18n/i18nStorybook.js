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
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
var ns = ['translation', 'main', 'about', 'profile'];
var supportedLngs = ['ru', 'en'];
var resources = ns.reduce(function (acc, n) {
    supportedLngs.forEach(function (lng) {
        var _a;
        if (!acc[lng])
            acc[lng] = {};
        acc[lng] = __assign(__assign({}, acc[lng]), (_a = {}, _a[n] = require("../../../../public/locales/".concat(lng, "/").concat(n, ".json")), _a));
    });
    return acc;
}, {});
i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
    // debug: true,
    lng: 'ru',
    fallbackLng: 'ru',
    defaultNS: 'translation',
    ns: ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs: supportedLngs,
    resources: resources,
});
export default i18n;

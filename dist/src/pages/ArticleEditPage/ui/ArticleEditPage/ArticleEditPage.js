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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/Page';
import { useParams } from 'react-router-dom';
var ArticleEditPage = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation('articles').t;
    var id = useParams().id;
    var isEdit = Boolean(id);
    return (_jsxs(PageWrapper, __assign({ className: classNames('', {}, [className]) }, { children: [isEdit ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u0441 id = ".concat(id) : 'Создание новой статьи', _jsx("p", { children: "\u041E\u0431\u043E\u0431\u0449\u0430\u044E\u0449\u0438\u0439 \u0432\u0438\u0434\u0436\u0435\u0442 \u0441 \u043D\u0430\u0431\u043E\u0440\u043E\u043C \u0444\u0438\u0447\u0435\u0439: \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0430, \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F" }, void 0)] }), void 0));
});
export default ArticleEditPage;

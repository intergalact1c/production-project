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
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
export var TextTheme;
(function (TextTheme) {
    TextTheme["PRIMARY"] = "primary";
    TextTheme["INVERTED"] = "inverted";
    TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
export var TextAlign;
(function (TextAlign) {
    TextAlign["LEFT"] = "left";
    TextAlign["RIGHT"] = "right";
    TextAlign["CENTER"] = "center";
})(TextAlign || (TextAlign = {}));
export var TextSize;
(function (TextSize) {
    TextSize["S"] = "size_s";
    TextSize["M"] = "size_m";
    TextSize["L"] = "size_l";
})(TextSize || (TextSize = {}));
var mapSizeToHeaderTag = (_a = {},
    _a[TextSize.S] = 'h3',
    _a[TextSize.M] = 'h2',
    _a[TextSize.L] = 'h1',
    _a);
export var Text = memo(function (props) {
    var className = props.className, title = props.title, text = props.text, _a = props.theme, theme = _a === void 0 ? TextTheme.PRIMARY : _a, _b = props.align, align = _b === void 0 ? TextAlign.LEFT : _b, _c = props.size, size = _c === void 0 ? TextSize.M : _c, _d = props["data-testid"], dataTestId = _d === void 0 ? 'Text' : _d;
    var HeaderTag = mapSizeToHeaderTag[size];
    return (_jsxs("div", __assign({ className: classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]]) }, { children: [title
                && (_jsx(HeaderTag, __assign({ className: cls.textTitle, "data-testid": "".concat(dataTestId, ".Header") }, { children: title }), void 0)), text
                && (_jsx("p", __assign({ className: cls.textText, "data-testid": "".concat(dataTestId, ".Paragraph") }, { children: text }), void 0))] }), void 0));
});

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
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleView } from 'entities/Article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import ListIcon from '../../shared/assets/icons/list.svg';
import TileIcon from '../../shared/assets/icons/tile.svg';
var viewTypes = [
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];
export var ArticleViewSelector = memo(function (_a) {
    var className = _a.className, view = _a.view, onViewClick = _a.onViewClick;
    var t = useTranslation('articles').t;
    // Ф-я onClick всегда принимает эвент, специфичный для слушателя события onClick
    // Также, нам надо передать в ф-ю новый вид отображения, выбранный пользователем
    // Поэтому, мы делаем ф-ю, которая возвращает ф-ю (такого рода замыкание) принимающую (на верхнем уровне замыкания) newView
    /* const onClickButton = (newView: ArticleView) => {
            return () => {
                onViewClick?.(newView);
            };
        }; */
    var onClickButton = function (newView) { return function () {
        onViewClick === null || onViewClick === void 0 ? void 0 : onViewClick(newView);
    }; };
    return (_jsx("div", __assign({ className: classNames(cls.ArticleViewSelector, {}, [className]) }, { children: viewTypes.map(function (type) {
            var _a;
            return (_jsx(Button, __assign({ theme: ButtonTheme.CLEAR, 
                // onClickButton передаем не как ссылку. Мы вызываем ф-ю onClickButton, а ее вызов вернет нам новую функцию
                onClick: onClickButton(type.view), title: type.view === 'list' ? t('Список') : t('Плитка'), className: classNames(cls.btn, (_a = {}, _a[cls.notSelected] = type.view !== view, _a), []) }, { children: _jsx(Icon, { SVG: type.icon }, void 0) }), type.view));
        }) }), void 0));
});

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
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
// import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ArticleBlockType, ArticleView, } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import ViewsIcon from '../../../../shared/assets/icons/views.svg';
export var ArticleListItem = memo(function (_a) {
    var className = _a.className, article = _a.article, view = _a.view, target = _a.target;
    var t = useTranslation('articles').t;
    // const navigate = useNavigate();
    /* const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]); */
    if (view === ArticleView.LIST) {
        var textBlock = article.blocks.find(function (block) { return block.type === ArticleBlockType.TEXT; });
        return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsxs("div", __assign({ className: cls.info }, { children: [_jsxs("div", __assign({ className: cls.user }, { children: [_jsx(Avatar, { size: 50, src: article.user.avatar }, void 0), _jsx(Text, { title: article.user.login, className: cls.login }, void 0)] }), void 0), _jsx("span", __assign({ className: cls.date }, { children: article.createdAt }), void 0)] }), void 0), _jsx(Text, { title: article.title, className: cls.title }, void 0), _jsx("div", __assign({ className: cls.type }, { children: article.type.map(function (item) { return _jsx("span", { children: item }, item); }) }), void 0)] }), void 0), _jsxs("div", __assign({ className: cls.body }, { children: [_jsx("div", { className: cls.image, style: {
                                    backgroundImage: "url(".concat(article.img, ")"),
                                    backgroundPosition: 'center',
                                    backgroundSize: '160px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: '#d4b830',
                                } }, void 0), textBlock && _jsx(Text, { text: textBlock.paragraphs[0], className: cls.preview }, void 0)] }), void 0), _jsxs("div", __assign({ className: cls.footer }, { children: [_jsx(AppLink, __assign({ target: target, to: RoutePath.article_details + article.id }, { children: _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE }, { children: t('Подробнее') }), void 0) }), void 0), _jsxs("div", __assign({ className: cls.views }, { children: [_jsx(Icon, { SVG: ViewsIcon }, void 0), _jsx(Text, { text: String(article.views) }, void 0)] }), void 0)] }), void 0)] }, void 0) }), void 0));
    }
    return (_jsx(AppLink, __assign({ target: target, to: RoutePath.article_details + article.id, className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, { children: [_jsx("div", __assign({ className: cls.header }, { children: _jsx("div", __assign({ className: cls.image }, { children: _jsxs("div", __assign({ className: cls.inner }, { children: [_jsx("img", { src: article.img, alt: article.title }, void 0), _jsx("span", __assign({ className: cls.date }, { children: article.createdAt }), void 0)] }), void 0) }), void 0) }), void 0), _jsxs("div", __assign({ className: cls.body }, { children: [_jsxs("div", __assign({ className: cls.info }, { children: [_jsx(Text, { className: cls.type, text: article.type.join(', ') }, void 0), _jsxs("div", __assign({ className: cls.views }, { children: [_jsx(Icon, { SVG: ViewsIcon }, void 0), _jsx(Text, { text: String(article.views) }, void 0)] }), void 0)] }), void 0), _jsx(Text, { title: article.title, className: cls.title }, void 0)] }), void 0)] }, void 0) }), void 0));
});

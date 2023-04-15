var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
export var AppRouters;
(function (AppRouters) {
    AppRouters["MAIN"] = "main";
    AppRouters["ABOUT"] = "about";
    AppRouters["PROFILE"] = "profile";
    AppRouters["ARTICLES"] = "articles";
    AppRouters["ARTICLE_DETAILS"] = "article_details";
    AppRouters["ARTICLE_CREATE"] = "article_create";
    AppRouters["ARTICLE_EDIT"] = "article_edit";
    // last
    AppRouters["NOT_FOUND"] = "not_found";
})(AppRouters || (AppRouters = {}));
export var RoutePath = (_a = {},
    _a[AppRouters.MAIN] = '/',
    _a[AppRouters.ABOUT] = '/about',
    _a[AppRouters.PROFILE] = '/profile/',
    _a[AppRouters.ARTICLES] = '/articles',
    _a[AppRouters.ARTICLE_DETAILS] = '/articles/',
    _a[AppRouters.ARTICLE_CREATE] = '/articles/new',
    _a[AppRouters.ARTICLE_EDIT] = '/articles/:id/edit',
    _a[AppRouters.NOT_FOUND] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRouters.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}, void 0),
    },
    _b[AppRouters.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}, void 0),
    },
    _b[AppRouters.PROFILE] = {
        path: "".concat(RoutePath.profile, ":id"),
        element: _jsx(ProfilePage, {}, void 0),
        authOnly: true,
    },
    _b[AppRouters.ARTICLES] = {
        path: RoutePath.articles,
        element: _jsx(ArticlesPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRouters.ARTICLE_DETAILS] = {
        path: "".concat(RoutePath.article_details, ":id"),
        element: _jsx(ArticleDetailsPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRouters.ARTICLE_EDIT] = {
        path: "".concat(RoutePath.article_edit),
        element: _jsx(ArticleEditPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRouters.ARTICLE_CREATE] = {
        path: "".concat(RoutePath.article_create),
        element: _jsx(ArticleEditPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRouters.NOT_FOUND] = {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}, void 0),
    },
    _b);

import { ArticleView, ArticleSortField, ArticleType } from 'entities/Article';
export var getArticlesPageIsLoading = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.isLoading) || false; };
export var getArticlesPageError = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.error; };
export var getArticlesPageView = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.view) || ArticleView.LIST; };
export var getArticlesPageTriggerVisible = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.isTriggerVisible; };
// pagination
export var getArticlesPageNumber = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.page) || 1; };
export var getArticlesPageLimit = function (state) { var _a; return ((_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.limit) || 8; };
export var getArticlesPageHasMore = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.hasMore; };
export var getArticlesPageInited = function (state) { var _a; return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a._inited; };
export var getArticlesPageOrder = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.order) !== null && _b !== void 0 ? _b : 'asc'; };
export var getArticlesPageSort = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.sort) !== null && _b !== void 0 ? _b : ArticleSortField.CREATED; };
export var getArticlesPageSearch = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.search) !== null && _b !== void 0 ? _b : ''; };
export var getArticlesPageType = function (state) { var _a, _b; return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : ArticleType.ALL; };

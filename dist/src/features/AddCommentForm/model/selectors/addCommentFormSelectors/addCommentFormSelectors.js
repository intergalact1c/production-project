export var getAddCommentFormText = function (state) { var _a, _b; return (_b = (_a = state === null || state === void 0 ? void 0 : state.addCommentForm) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : ''; };
// .text || '' - отработает некорректно, если в инпут введем 0.
// Используем nullish operator (??). В таком случае стейт проинициализируется пустой строкой только тогда, когда левый операнд null или undefined
// На 0 и другие falsy значения он реагировать не будет
export var getAddCommentFormError = function (state) { var _a; return (_a = state === null || state === void 0 ? void 0 : state.addCommentForm) === null || _a === void 0 ? void 0 : _a.error; };

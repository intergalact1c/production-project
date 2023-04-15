import { createSelector } from '@reduxjs/toolkit';
export var getScrollRecovery = function (state) { return state.scrollRecovery.scroll; };
export var getScrollRecoveryPath = createSelector(getScrollRecovery, function (state, path) { return path; }, function (scroll, path) { return scroll[path] || 0; });

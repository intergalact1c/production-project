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
import { combineReducers, } from '@reduxjs/toolkit';
export function createReducerManager(initialReducers) {
    // Create an object which maps keys to reducers
    var reducers = __assign({}, initialReducers);
    // Create the initial combinedReducer
    var combinedReducer = combineReducers(reducers);
    // An array which is used to delete state keys when reducers are removed
    var keysToRemove = [];
    var mountedReducers = {};
    return {
        getReducerMap: function () { return reducers; },
        getMountedReducers: function () { return mountedReducers; },
        // The root reducer function exposed by this object
        // This will be passed to the store
        reduce: function (state, action) {
            // If any reducers have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = __assign({}, state);
                keysToRemove.forEach(function (key) { return delete state[key]; });
                keysToRemove = [];
            }
            // Delegate to the combined reducer
            return combinedReducer(state, action);
        },
        // Adds a new reducer with the specified key
        add: function (key, reducer) {
            if (!key || reducers[key]) {
                return;
            }
            // Add the reducer to the reducer mapping
            reducers[key] = reducer;
            mountedReducers[key] = true;
            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },
        // Removes a reducer with the specified key
        remove: function (key) {
            if (!key || !reducers[key]) {
                return;
            }
            // Remove it from the reducer mapping
            delete reducers[key];
            // Add the key to the list of keys to clean up
            keysToRemove.push(key);
            mountedReducers[key] = false;
            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },
    };
}

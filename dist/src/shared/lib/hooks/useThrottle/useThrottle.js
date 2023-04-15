import { useCallback, useEffect, useRef } from 'react';
export function useThrottle(callback, delay) {
    var timeoutRef = useRef(null); // TS2322: Type 'Timeout' is not assignable to type 'null'.
    var throttleRef = useRef(false);
    // eslint-disable-next-line consistent-return
    useEffect(function () { return function () {
        if (timeoutRef.current !== null) {
            // console.log(timeoutRef.current);
            return clearTimeout(timeoutRef.current);
        }
    }; }, []);
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!throttleRef.current) {
            callback.apply(void 0, args);
            throttleRef.current = true;
            // console.log(timeoutRef.current);
            timeoutRef.current = setTimeout(function () {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
}

import { useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // TS2322: Type 'Timeout' is not assignable to type 'null'.
    const throttleRef = useRef(false);

    useEffect(
        // eslint-disable-next-line consistent-return
        () => () => {
            if (timeoutRef.current !== null) {
                // console.log(timeoutRef.current);
                return clearTimeout(timeoutRef.current);
            }
        },
        [],
    );

    return useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                // console.log(timeoutRef.current);

                timeoutRef.current = setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}

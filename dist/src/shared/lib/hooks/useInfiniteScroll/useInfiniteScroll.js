import { useEffect } from 'react';
export function useInfiniteScroll(_a) {
    var callback = _a.callback, triggerRef = _a.triggerRef, wrapperRef = _a.wrapperRef;
    useEffect(function () {
        var observer = null;
        if (callback && __PROJECT__ !== 'storybook') {
            var options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(function (_a) {
                var entry = _a[0];
                if (entry.isIntersecting) {
                    // console.log('isIntersecting');
                    callback();
                }
            }, options);
            observer.observe(triggerRef.current);
        }
        return function () {
            if (observer && triggerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerRef.current);
            }
        };
    }, [callback, wrapperRef, triggerRef]);
}

import { useEffect } from 'react';
export var useInitialEffect = function (callback) {
    useEffect(function () {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
};

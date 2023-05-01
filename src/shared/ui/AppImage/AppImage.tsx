import {
    ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        errorFallback,
        fallback,
        ...rest
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    // Для дефолтного изображения
    const [hasError, setHasError] = useState(false);

    // Загрузка изображения начнется до вмонтирования компонента т.е. получим прирост производительности
    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        // Слушатель события onload отрабатывает когда изображение закончило грузится
        img.onload = () => {
            setIsLoading(false);
        };
        // Когда возникла ошибка
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img className={className} src={src} alt={alt} {...rest} />
    );
});

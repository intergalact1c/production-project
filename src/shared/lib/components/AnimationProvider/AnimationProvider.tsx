import {
    createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

// Выводим типы из библиотек
type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    // true, когда библиотеки загрузились
    isLoaded?: boolean;
}

// Создаем контекст
const AnimationContext = createContext<AnimationContextPayload>({});

// Функция для параллельной асинхронной загрузки библиотек
const getAsyncAnimationModules = async () => Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
]);

/* Функция для пошаговой асинхронной загрузки библиотек
const getAsyncAnimationModules = async () => {
    const Spring = await import('@react-spring/web');
    const Gesture = await import('@use-gesture/react');
}; */

// Хук, возвращающий объекты Gesture и Spring
// Т.к. Gesture и Spring имеют флаг Optional chaining (?), то возможен момент, когда библиотеки еще не будут загружены
// Т.е. будет TS2532: Object is possibly 'undefined'.
// Чтобы не делать type guard и проверку на undefined, кастуем результат выполнения хука к обязательно возвращаемым полям
export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;

// ThemeProvider - глобальный провайдер для всего приложения
// AnimationProvider - провайдер, который точечно предоставляет доступ к своему контексту
// Поэтому ThemeProvider находится в app/providers, а AnimationProvider - в shared/lib
export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    // Создаем референсы на библиотеки, чтобы избежать лишних перерисовок
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    // Состояние загрузки библиотек
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Spring - результат промиса № 1, Gesture - результат промиса № 2
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            // Сохраняем в референсы результаты асинхронных импортов
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    // ESLint: The object passed as the value prop to the Context provider (at line 59 (61)) changes every render.
    // To fix this consider wrapping it in a useMemo hook.(react/jsx-no-constructed-context-values)
    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        // Возвращаем обернутый в провайдер children
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};

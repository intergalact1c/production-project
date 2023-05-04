import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

// Принимает StateSchema и возвращает её часть
// Возвращаемое значение подхватывается и автоматически типизируется дженериком
type Selector<T> = (state: StateSchema) => T;

type Result<T> = [() => T, Selector<T>];

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => useSelector(selector);

    // Возвращаем хук и селектор
    return [useSelectorHook, selector];
}

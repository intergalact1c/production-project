import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack/HStack/HStack';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

// T - значение является динамическим и определяется извне
interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    selectId?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    mwa?: boolean;
}

const typedMemo: <T>(c: T) => T = memo;

// Дженерик пропсы плохо работают с memo. Для мемоизации нужно добавить специальную обертку
export const Select = typedMemo(<T extends string>({
    className,
    label = 'Выберите из списка:',
    selectId = 'some-select',
    options,
    value,
    onChange,
    readonly,
    mwa = false,
}: SelectProps<T>) => {
    const optionsList = useMemo(
        () => (options?.map((opt) => (<option key={opt.value} value={opt.value}>{opt.content}</option>))),
        [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const mods: Mods = {
        mw_a: mwa,
    };

    return (
        <HStack
            justify="between"
            className={classNames(cls.SelectWrapper, {}, [className])}
        >
            {label && <label htmlFor={selectId} className={classNames('', mods, [])}><span>{label}</span></label>}
            <select
                id={selectId}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </HStack>
    );
});

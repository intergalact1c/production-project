import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    selectId?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo(({
    className,
    label = 'Выберите из списка:',
    selectId = 'some-select',
    options,
    value,
    onChange,
    readonly,
}: SelectProps) => {
    const optionsList = useMemo(
        () => (options?.map((opt) => (<option key={opt.value} value={opt.value}>{opt.content}</option>))),
        [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.SelectWrapper, {}, [className])}>
            {label && <label htmlFor={selectId}><span>{label}</span></label>}
            <select
                id={selectId}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});

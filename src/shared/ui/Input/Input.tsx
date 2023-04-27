import React, {
    InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack/HStack/HStack';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    classname?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
    readonly?: boolean;
    mwa?: boolean;
}

const charSize = 7.33;

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus = false,
        readonly = false,
        mwa = false,
        ...rest
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const [selectCaretPosition, setSelectCaretPosition] = useState(0);
    const [inputWidth, setInputWidth] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        onChange?.(val);
        if (val.length === selectCaretPosition) {
            if (val.length * charSize < inputWidth) {
                setCaretPosition(val.length);
            } else {
                setCaretPosition(inputWidth / charSize);
            }
        }
    };

    const onBlurHandler = () => {
        setIsFocused(false);
    };

    const onFocusHandler = () => {
        setIsFocused(true);
    };

    const onSelectHandler = (e: SyntheticEvent<HTMLInputElement, Event>) => {
        const start = e.currentTarget.selectionStart || 0;
        setSelectCaretPosition(start + 1);
        if (e.currentTarget.value.length * charSize < inputWidth) {
            setCaretPosition(start + 1);
        }
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autoFocus) {
            onFocusHandler();
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    useEffect(() => {
        if (!inputWidth) {
            const width = inputRef.current?.offsetWidth;
            if (width && inputRef.current.parentElement) {
                setInputWidth(Math.ceil(width - charSize));
                inputRef.current.parentElement.style.width = `${inputRef.current.offsetWidth}px`;
                inputRef.current.style.width = `${width - charSize}px`;
            }
        }
    }, [inputWidth]);

    return (
        <HStack
            justify="between"
            className={classNames(cls.InputWrapper, mods, [className])}
        >
            {placeholder && (
                <div className={classNames(cls.placeholder, { mw_a: mwa }, [])}>
                    <span>{placeholder}</span>
                </div>
            )}
            <div className={cls.caretWrapper} style={{ paddingLeft: `${charSize}px` }}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    onSelect={onSelectHandler}
                    className={cls.input}
                    disabled={readonly}
                    {...rest}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * charSize}px` }}
                    />
                )}
            </div>
        </HStack>

    );
});

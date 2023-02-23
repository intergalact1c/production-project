import React, {
    InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    classname?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
}

const charSize = 7.33;

export const Input = memo((props: InputProps) => {
    const {
        classname,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus = false,
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
        const start = e.currentTarget.selectionStart;
        setSelectCaretPosition(start);
        if (e.currentTarget.value.length * charSize < inputWidth) {
            setCaretPosition(start);
        }
    };

    useEffect(() => {
        if (autoFocus) {
            onFocusHandler();
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    useEffect(() => {
        if (!inputWidth) {
            const width = inputRef.current.offsetWidth;
            setInputWidth(Math.ceil(width - charSize));
            inputRef.current.parentElement.style.width = `${inputRef.current.offsetWidth}px`;
            inputRef.current.style.width = `${width - charSize}px`;
        }
    }, [inputWidth]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [classname])}>
            {placeholder && (
                <div className={classNames(cls.placeholder, {}, [classname])}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    onSelect={onSelectHandler}
                    className={cls.input}
                    {...rest}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * charSize}px` }}
                    />
                )}
            </div>
        </div>

    );
});

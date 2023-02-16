import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme = ThemeButton.CLEAR, ...rest
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [cls[theme], className])}
            {...rest}
        >
            {children}
        </button>
    );
};

import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
  classname?: string;
  title?: string;
  text?: string;
  theme?: string;
}

export const Text = (props: TextProps) => {
    const {
        classname,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [classname])}>
            {title && <p className={cls.textTitle}>{title}</p>}
            {text && <p className={cls.textText}>{text}</p>}
        </div>
    );
};

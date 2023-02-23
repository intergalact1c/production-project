import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    classname?: string;
}

export const Loader = ({ classname }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [classname])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

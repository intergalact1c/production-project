import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  classname?: string;
}

export const Navbar = ({ classname }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [classname])} />
);

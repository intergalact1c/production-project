import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { Fragment, ReactNode } from 'react';
import { DropDownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './DropDown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropDownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export const DropDown = ({
    className, items, trigger, direction = 'bottom right',
}: DropDownProps) => (
    <Menu as="div" className={classNames(cls.DropDown, {}, [className])}>
        <Menu.Button className={cls.btn}>
            {trigger}
        </Menu.Button>
        <Menu.Items className={classNames(cls.items, {}, [mapDirectionClass[direction]])}>
            {items.map((item, index) => {
                const content = ({ active }: {active: boolean}) => (
                    <button
                        type="button"
                        disabled={item.disabled}
                        onClick={item.onClick}
                        className={classNames(cls.item, { [cls.active]: active }, [])}
                    >
                        {item.content}
                    </button>
                );

                if (item.href) {
                    return (
                        <Menu.Item key={index} as={AppLink} to={item.href} refName="href" disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                }

                return (
                    <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                        {content}
                    </Menu.Item>
                );
            })}
        </Menu.Items>
    </Menu>
);

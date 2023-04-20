import { Menu } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './DropDown.module.scss';
import popupCls from '../../styles/popup.module.scss';

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

export const DropDown = ({
    className, items, trigger, direction = 'bottom right',
}: DropDownProps) => (
    <Menu as="div" className={classNames(cls.DropDown, {}, [className, popupCls.popup])}>
        <Menu.Button className={popupCls.trigger}>
            {trigger}
        </Menu.Button>
        <Menu.Items className={classNames(cls.items, {}, [mapDirectionClass[direction]])}>
            {items.map((item, index) => {
                const content = ({ active }: {active: boolean}) => (
                    <button
                        type="button"
                        disabled={item.disabled}
                        onClick={item.onClick}
                        className={classNames(cls.item, { [popupCls.active]: active }, [])}
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

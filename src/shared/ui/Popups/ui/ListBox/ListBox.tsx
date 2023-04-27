import React, { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react'; // H... - headless
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import { HStack } from '../../../Stack/HStack/HStack';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

export const ListBox = ({
    className, items, value, defaultValue, onChange, readonly = false, direction = 'bottom left', label,
}:ListBoxProps) => (
    <HListbox
        disabled={readonly}
        as="div"
        value={value}
        onChange={onChange}
        className={classNames(cls.ListBox, {}, [className])}
    >
        <HStack>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}
            <div className={cls.wrapper}>
                <HListbox.Button className={classNames(popupCls.trigger, { [popupCls.disabled]: readonly }, [cls.btn])}>
                    {value ?? defaultValue}
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    },
                                    [],
                                )}
                                >
                                    {selected && '>> '}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </div>
        </HStack>
    </HListbox>
);

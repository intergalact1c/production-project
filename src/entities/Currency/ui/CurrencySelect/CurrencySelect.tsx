import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <>
            <ListBox
                label={t('Укажите валюту')}
                defaultValue={Currency.EUR}
                value={value}
                onChange={onChangeHandler}
                items={options}
                className={classNames('', {}, [className])}
                readonly={readonly}
                direction="bottom right"
            />
            {/* <Select
            label={t('Укажите валюту')}
            value={value}
            onChange={onChangeHandler}
            options={options}
            selectId="currency"
            className={classNames('', {}, [className])}
            readonly={readonly}
        /> */
            }
        </>
    );
});

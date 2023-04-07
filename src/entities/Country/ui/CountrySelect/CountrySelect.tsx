import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <>
            <ListBox
                label={t('Укажите страну')}
                defaultValue={Country.Armenia}
                value={value}
                onChange={onChangeHandler}
                items={options}
                className={classNames('', {}, [className])}
                readonly={readonly}
                direction="bottom left"
            />
            {/* <Select
                label={t('Укажите страну')}
                value={value}
                onChange={onChangeHandler}
                options={options}
                selectId="currency"
                className={classNames('', {}, [className])}
                readonly={readonly}
            /> */}
        </>
    );
});

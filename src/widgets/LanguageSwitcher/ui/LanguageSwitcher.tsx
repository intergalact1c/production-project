import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
    classname?: string;
    short?: boolean;
}

export const LanguageSwitcher = memo(({ classname, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [classname])}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={toggle}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
});

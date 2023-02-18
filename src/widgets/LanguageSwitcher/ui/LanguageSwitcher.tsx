import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from 'shared/ui/AppLink/AppLink.module.scss';

interface LanguageSwitcherProps {
  classname?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ classname, short }) => {
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
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};

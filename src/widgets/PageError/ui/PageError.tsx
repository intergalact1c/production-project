import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  classname?: string;
}

export const PageError = ({ classname }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [classname])}>
            <p>{t('Произошла непревиденная ошибка')}</p>
            <Button theme={ThemeButton.OUTLINE} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};

import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  classname?: string;
}

export const NotFoundPage = ({ classname }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [classname])}>
            {t('Страница не найдена')}
        </div>
    );
};

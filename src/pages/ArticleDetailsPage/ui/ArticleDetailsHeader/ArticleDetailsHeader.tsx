import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsHeader.module.scss';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsHeaderProps {
    className?: string;
}

export const ArticleDetailsHeader = memo(({ className }: ArticleDetailsHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    return (
        <HStack justify="end" className={classNames(cls.ArticleDetailsHeader, {}, [className])}>
            {canEdit && (
                <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle} className={cls.bth}>
                    {t('Редактировать')}
                </Button>
            )}
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList} className={cls.bth}>
                {t('Назад')}
            </Button>
        </HStack>
    );
});

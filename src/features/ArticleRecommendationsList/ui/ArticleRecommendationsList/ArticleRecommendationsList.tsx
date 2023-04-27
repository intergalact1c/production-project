import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { useGetArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useGetArticleRecommendationsList(6);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <div className={classNames('', {}, [className])}>
            <Text title={t('Рекомендации')} className={cls.recommendationsTitle} />
            <ArticleList
                articles={articles}
                className={cls.recommendations}
                target="_blank"
            />
        </div>
    );
});

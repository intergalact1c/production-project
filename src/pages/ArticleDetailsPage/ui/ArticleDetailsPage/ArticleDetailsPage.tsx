import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsHeader } from '../../ui/ArticleDetailsHeader/ArticleDetailsHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    const articleId = __PROJECT__ !== 'storybook' ? id : '1';

    if (!articleId) {
        return <div className={classNames('', {}, [className])}>{t('Статья не найдена')}</div>;
    }

    /* const articleRatingCard = toggleFeatures({
        name: 'isArticleRatingEnabled',
        on: () => <ArticleRating articleId={articleId} />,
        off: () => <p>{t('Рейтинг статьи')}</p>,
    }); */

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <PageWrapper className={classNames('', {}, [className])}>
                <ArticleDetailsHeader />
                <ArticleDetails articleId={articleId} />
                {/* articleRatingCard */}
                <ToggleFeatures
                    feature="isArticleRatingEnabled"
                    on={<ArticleRating articleId={articleId} />}
                    off={<p>{t('Рейтинг статьи')}</p>}
                />
                <ArticleRecommendationsList />
                <ArticleDetailsComments articleId={articleId} />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

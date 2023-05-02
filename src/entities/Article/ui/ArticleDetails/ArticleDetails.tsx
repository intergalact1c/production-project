import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { ArticleBlockType } from '../../model/const/consts';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticlesById } from '../../model/services/fetchArticlesById/fetchArticlesById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import ViewsIcon from '../../../../shared/assets/icons/views.svg';
import CreatedAtIcon from '../../../../shared/assets/icons/created-at.svg';
import { ArticleBlock } from '../../model/types/article';

interface ArticleDetailsProps {
    className?: string;
    articleId: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

// Выносим из компонента ArticleDetails, чтобы не оборачивать в callback
const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent className={cls.block} key={block.id} block={block} />;
    case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent className={cls.block} key={block.id} block={block} />;
    case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent className={cls.block} key={block.id} block={block} />;
    default:
        return null;
    }
};

export const ArticleDetails = memo(({ className, articleId }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const { t } = useTranslation('article-details');

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticlesById(articleId));
        }
    }, [dispatch, articleId]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton className={cls.skeleton} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                text={t('Произошла ошибка при загрузке статьи')}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <>
                <Avatar
                    className={cls.avatar}
                    size={200}
                    src={data?.img}
                />
                <Text
                    className={cls.mainText}
                    title={data?.title}
                    text={data?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.info}>
                    <Icon SVG={ViewsIcon} />
                    <Text text={String(data?.views)} />
                </div>
                <div className={cls.info}>
                    <Icon SVG={CreatedAtIcon} />
                    <Text text={String(data?.createdAt)} />
                </div>
                {data?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

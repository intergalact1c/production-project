import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
// import { useNavigate } from 'react-router-dom';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/const/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import ViewsIcon from '../../../../shared/assets/icons/views.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({ className, article, view, target }: ArticleListItemProps) => {
    const { t } = useTranslation('articles');
    // const navigate = useNavigate();

    /* const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]); */

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])} data-testid="ArticleListItem">
                <Card>
                    <div className={cls.header}>
                        <div className={cls.info}>
                            <div className={cls.user}>
                                <Avatar size={50} src={article.user.avatar} />
                                <Text title={article.user.login} className={cls.login} />
                            </div>
                            <span className={cls.date}>{article.createdAt}</span>
                        </div>
                        <Text title={article.title} className={cls.title} />
                        <div className={cls.type}>
                            {article.type.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div className={cls.body}>
                        <div
                            className={cls.image}
                            style={{
                                backgroundImage: `url(${article.img})`,
                                backgroundPosition: 'center',
                                backgroundSize: '160px',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: '#d4b830',
                            }}
                        />
                        {textBlock && <Text text={textBlock.paragraphs[0]} className={cls.preview} />}
                    </div>
                    <div className={cls.footer}>
                        <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                            <Button theme={ButtonTheme.OUTLINE}>{t('Подробнее')}</Button>
                        </AppLink>
                        <div className={cls.views}>
                            <Icon SVG={ViewsIcon} />
                            <Text text={String(article.views)} />
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.header}>
                    <div className={cls.image}>
                        <div className={cls.inner}>
                            <AppImage fallback={<Skeleton width={268} height={268} />} src={article.img} alt={article.title} />
                            <span className={cls.date}>{article.createdAt}</span>
                        </div>
                    </div>
                </div>
                <div className={cls.body}>
                    <div className={cls.info}>
                        <Text className={cls.type} text={article.type.join(', ')} />
                        <div className={cls.views}>
                            <Icon SVG={ViewsIcon} />
                            <Text text={String(article.views)} />
                        </div>
                    </div>
                    <Text title={article.title} className={cls.title} />
                </div>
            </Card>
        </AppLink>
    );
});

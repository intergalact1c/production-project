import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import ViewsIcon from '../../../../shared/assets/icons/views.svg';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation('articles');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <div className={cls.info}>
                            <div className={cls.user}>
                                <Avatar
                                    size={50}
                                    src={article.user.avatar}
                                />
                                <Text title={article.user.login} className={cls.login} />
                            </div>
                            <span className={cls.date}>{article.createdAt}</span>
                        </div>
                        <Text title={article.title} className={cls.title} />
                        <div className={cls.type}>
                            {article.type.map((item) => <span key={item}>{item}</span>)}
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
                        {textBlock && textBlock.paragraphs[0]}
                    </div>
                    <div className={cls.footer}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>{t('Подробнее')}</Button>
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
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.header}>
                    <div className={cls.image}>
                        <div className={cls.inner}>
                            <img src={article.img} alt={article.title} />
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
        </div>
    );
});

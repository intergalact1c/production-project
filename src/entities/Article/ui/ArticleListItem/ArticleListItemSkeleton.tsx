import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/const/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton width="100%" height={130} />
                    </div>
                    <div className={cls.body}>
                        <div className={cls.image}>
                            <Skeleton width="100%" height="100%" />
                        </div>
                        <Skeleton width="100%" height={48} />
                    </div>
                    <div className={cls.footer}>
                        <Skeleton width="100%" height={38} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.header}>
                    <div className={cls.image}>
                        <div className={cls.inner}>
                            <Skeleton width="100%" height="100%" />
                        </div>
                    </div>
                </div>
                <div className={cls.body}>
                    <div className={cls.info}>
                        <Skeleton width="100%" height={24} />
                    </div>
                    <Skeleton width="100%" height={64} />
                </div>
            </Card>
        </div>
    );
});

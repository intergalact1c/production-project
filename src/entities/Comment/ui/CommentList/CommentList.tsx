import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { CommentType } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentList = memo(
    ({ className, comments, isLoading }: CommentListProps) => {
        const { t } = useTranslation();

        if (isLoading) {
            return (
                <div className={classNames(cls.CommentList, {}, [className])}>
                    <CommentCard isLoading className={cls.comment} />
                    <CommentCard isLoading className={cls.comment} />
                    <CommentCard isLoading className={cls.comment} />
                </div>
            );
        }

        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            isLoading={isLoading}
                            comment={comment}
                            className={cls.comment}
                        />
                    ))
                ) : (
                    <Text text={t('Комментарии отсутствуют')} />
                )}
            </div>
        );
    },
);

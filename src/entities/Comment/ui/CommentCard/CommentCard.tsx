import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { CommentType } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" className={cls.avatar} />
                    <Skeleton width={100} height={16} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar
                    ? <Avatar size={30} className={cls.avatar} src={comment.user.avatar} alt={comment.user.login} />
                    : null}
                <Text title={comment.user.login} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});

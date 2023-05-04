import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { CommentType } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <HStack className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" className={cls.avatar} />
                    <Skeleton width={100} height={16} />
                </HStack>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
            data-testid="CommentCard.Content"
        >
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                {comment.user.avatar
                    ? <Avatar size={30} className={cls.avatar} src={comment.user.avatar} alt={comment.user.login} />
                    : null}
                <Text title={comment.user.login} />
            </AppLink>
            <Text text={comment.text} />
        </div>
    );
});

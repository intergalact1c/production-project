import React, {
    memo, Suspense, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    addCommentFormArticle,
} from '../../model/services/addCommentFormArticle/addCommentFormArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsComments.module.scss';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
    className?: string;
    articleId: string;
}

export const ArticleDetailsComments = memo(({ className, articleId }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentFormArticle(text));
    }, [dispatch]);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(articleId));
        }
    }, [dispatch, articleId]);

    return (
        <div className={classNames('', {}, [className])}>
            <Text title={t('Комментарии')} className={cls.commentsTitle} />
            {/* <Suspense fallback=""> */}
            <AddCommentForm onSendComment={onSendComment} />
            {/* </Suspense> */}
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </div>
    );
});

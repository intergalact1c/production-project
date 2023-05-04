import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from '@/entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType> {
    // добавляем в тип ids: [] и entities: {}
    isLoading: boolean;
    error?: string;
}

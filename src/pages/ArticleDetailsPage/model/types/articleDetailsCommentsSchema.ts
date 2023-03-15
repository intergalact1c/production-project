import { CommentType } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType>{ // добавляем в тип ids: [] и entities: {}
    isLoading: boolean;
    error?: string;
}

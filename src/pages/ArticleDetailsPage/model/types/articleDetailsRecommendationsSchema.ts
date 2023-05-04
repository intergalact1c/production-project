import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';

export interface ArticleDetailsRecommendationsSchema
    extends EntityState<Article> {
    // добавляем в тип ids: [] и entities: {}
    isLoading: boolean;
    error?: string;
}

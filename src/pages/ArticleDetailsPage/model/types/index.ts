import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}

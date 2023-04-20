import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

// RTK автоматически генерирует хуки, которые умеют кешировать, запоминать / возвращать данные
// Хуки генерируются в зависимости от названия
export const useGetArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;

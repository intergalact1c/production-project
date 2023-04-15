import { rtkApi } from 'shared/api/rtkApi';
var recommendationsApi = rtkApi.injectEndpoints({
    endpoints: function (build) { return ({
        getArticleRecommendationsList: build.query({
            query: function (limit) { return ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }); },
        }),
    }); },
});
// RTK умеет автоматически генерировать хуки, которые умеют кешировать, запоминать / возвращать данные
// Хуки генерируются в зависимости от названия
export var useGetArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;

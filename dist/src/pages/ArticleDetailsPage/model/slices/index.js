import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsRecommendationsReducer, } from '../../model/slices/articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
export var articleDetailsPageReducer = combineReducers({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

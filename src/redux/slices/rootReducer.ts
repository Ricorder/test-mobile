import { CombinedState, Reducer, combineReducers } from 'redux'
import articlesSlice from './articlesSlice';
import articleSlice from './currentArticleSlice'

const rootReducer: Reducer = combineReducers({
  articles: articlesSlice,
  currentArticle: articleSlice,
})

export default rootReducer

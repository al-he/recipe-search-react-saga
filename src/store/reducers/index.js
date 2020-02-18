import { combineReducers } from 'redux';
import recipesReducer from './search/';
import filterReducer from './filters';

export default combineReducers({
    recipes: recipesReducer,
    filters: filterReducer,
});

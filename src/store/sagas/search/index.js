import { API } from '../../../services';
import { put, takeLatest, call } from 'redux-saga/effects';
import { getRecipesFail, getRecipesSuccess } from '../../actions/search';
import { RecipeTypes } from '../../types/search';

function* fetchRecipes({ query, parameters, offset }) {
    try {
        const data = yield call(API, query, parameters, offset);
        yield put(getRecipesSuccess(data));
    } catch (error) {
        yield put(getRecipesFail());
    }
}

export function* recipesSaga() {
    yield takeLatest(RecipeTypes.GET_RECIPES, fetchRecipes);
}

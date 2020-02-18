import { all } from 'redux-saga/effects';
import { recipesSaga } from './search';
import { filtersSaga } from './filters';

export default function* rootSaga() {
    yield all([recipesSaga(), filtersSaga()]);
}

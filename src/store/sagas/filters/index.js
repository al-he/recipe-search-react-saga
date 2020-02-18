import { put, takeEvery } from 'redux-saga/effects';
import { FiltersTypes } from '../../types/filters';
import { refreshFilters } from '../../actions/filters';

function* filtersHandler({ filters }) {
    yield put(refreshFilters(filters));
}

export function* filtersSaga() {
    yield takeEvery(FiltersTypes.CLICK_FILTER, filtersHandler);
}

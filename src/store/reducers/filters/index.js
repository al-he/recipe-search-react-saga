import { FiltersTypes } from '../../types/filters';

const initialState = {
    filters: [],
};

const handlers = {
    [FiltersTypes.REFRESH_FILTERS]: (state, { filters }) => ({ ...state, filters }),
    DEFAULT: state => state,
};

export default function filterReducer(state = initialState, action) {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

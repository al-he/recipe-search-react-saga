import { RecipeTypes } from '../../types/search';

const initialState = {
    recipes: [],
    loading: false,
    error: false,
    total: 0,
};

const handlers = {
    [RecipeTypes.GET_RECIPES]: state => ({ ...state, loading: true, error: false }),
    [RecipeTypes.GET_RECIPES_FAIL]: state => ({ ...state, loading: false, error: true }),
    [RecipeTypes.GET_RECIPES_SUCCESS]: (state, { payload: { data } }) => ({
        ...state,
        recipes: data.hits,
        total: data.count,
        loading: false,
        error: false,
    }),
    DEFAULT: state => state,
};

export default function recipesReducer(state = initialState, action) {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

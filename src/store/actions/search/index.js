import { RecipeTypes } from '../../types/search';

export const getRecipes = (query, parameters, offset) => ({
    type: RecipeTypes.GET_RECIPES,
    query,
    parameters,
    offset,
});

export const getRecipesFail = () => ({
    type: RecipeTypes.GET_RECIPES_FAIL,
});

export const getRecipesSuccess = recipes => ({
    type: RecipeTypes.GET_RECIPES_SUCCESS,
    payload: recipes,
});

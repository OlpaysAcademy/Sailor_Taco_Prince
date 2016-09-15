import R from 'ramda';
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions';
import recipes from './recipes'
import ingredients from './ingredients'
import ui from './ui'

import { getIngredientId } from '../util';

const generalReducer = handleActions({
    ADD_INGREDIENT_RECIPE: (state, action) => {
        const ingredientName = action.payload.ingredientName;
        const recipeId = action.payload.id;

        const ingredientId = getIngredientId(ingredientName, state.ingredients.entities);
        const recipe = R.prop(recipeId, state.recipes.entities);

        if (recipe.ingredients.find(R.equals(ingredientId))) { return state; }

        recipe.ingredients = recipe.ingredients.concat([ingredientId]);

        const transformations = {
            recipe: R.assocPath(['entities', recipeId], recipe)
        }
        return R.evolve(transformations, state);
    }
}, {});

const tacoApp = (state, action) => {
    // Manage general state
    const newState = generalReducer(state, action);

    return combineReducers({
        recipes,
        ingredients,
        ui
    })(newState, action);
}


export default tacoApp;
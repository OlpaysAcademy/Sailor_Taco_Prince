// @flow

import { combineReducers } from 'redux';
import recipes from './recipes';
import shownRecipe from './shownRecipe';
import recipesById from './recipesById';
import ingredientsById from './ingredientsById';

const tacoApp = combineReducers({
    recipes,
    recipesById,
    ingredientsById,
    shownRecipe
});

export default tacoApp;

import { combineReducers } from 'redux';
import recipes from './recipes';
import shownRecipe from './shownRecipe';
import recipesById from './recipesById';

const tacoApp = combineReducers({
  recipes,
  recipesById,
  shownRecipe
});

export default tacoApp;

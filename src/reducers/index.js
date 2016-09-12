import { combineReducers } from 'redux'
import recipes from './recipes';
import selectedRecipe from './selectedRecipe';

const sailorTacoPrince = combineReducers({
  recipes,
  selectedRecipe
})

export default sailorTacoPrince;

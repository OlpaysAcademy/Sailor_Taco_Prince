// @flow

import {
  addRecipe,
  addIngredient,
  readRecipe,
  unreadRecipe,
  selectRecipe,
  unselectRecipe,
  readSelectedRecipes,
  unreadSelectedRecipes,
  selectAllRecipes,
  unselectAllRecipes
} from '../modules/recipes';

import type { State } from '../types/state';

const recipesById = (state: State.recipesById = {}, action: any): State.recipesById => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return addRecipe(state, { id: action.id, name: action.name })
    case 'ADD_INGREDIENT':
      return addIngredient(state, { recipeId: action.recipeId, ingredientId: action.ingredientId })
    case 'READ_RECIPE':
      return readRecipe(state, { id: action.id })
    case 'UNREAD_RECIPE':
      return unreadRecipe(state, { id: action.id })
    case 'SELECT_RECIPE':
      return selectRecipe(state, { id: action.id })
    case 'UNSELECT_RECIPE':
      return unselectRecipe(state, { id: action.id })
    case 'READ_SELECTED_RECIPES':
      return readSelectedRecipes(state)
    case 'UNREAD_SELECTED_RECIPES':
      return unreadSelectedRecipes(state)
    case 'SELECT_ALL_RECIPES':
      return selectAllRecipes(state)
    case 'UNSELECT_ALL_RECIPES':
      return unselectAllRecipes(state)
    default:
      return state
  }
}

export default recipesById

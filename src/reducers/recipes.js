// @flow

import type { Recipes } from '../types/state';

export const INITIAL_STATE = [];

const recipes = (state: Recipes = INITIAL_STATE, action: any): Recipes => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return addRecipeId(state, action.id)
    default:
      return state
  }
}

function addRecipeId(recipes: Recipes, recipeId: string): Recipes {
  return [
    ...recipes,
    recipeId
  ]
}

export default recipes

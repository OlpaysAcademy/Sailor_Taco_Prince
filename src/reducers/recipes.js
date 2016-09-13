// @flow

import { addRecipeId } from '../modules/recipes';

import type { State } from '../types/state';

// TODO: add action type
const recipes = (state: State.recipes = [], action: any): State.recipes => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return addRecipeId(state, action.id)
    default:
      return state
  }
}

export default recipes

// @flow

import type { Ingredient, IngredientsById } from '../types/state';

export const INITIAL_STATE = {};

const ingredientsById = (state: IngredientsById = INITIAL_STATE, action: any): IngredientsById => {
    switch (action.type) {
        case 'CREATE_INGREDIENT':
            return addIngredient(state, { id: action.id, name: action.name })
        default:
            return state
    }
}

function addIngredient(ingredientsById: IngredientsById, ingredient: { id: string, name: string }): IngredientsById {
  return {
    ...ingredientsById,
    [ingredient.id]: createIngredient(ingredient)
  }
}

function createIngredient({ id, name }: { id: string, name: string }): Ingredient {
  return {
    id,
    name
  };
}

export default ingredientsById

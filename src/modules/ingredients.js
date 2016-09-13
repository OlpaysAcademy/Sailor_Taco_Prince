// @flow

import type { State, Ingredient } from '../types/state';

export function addIngredient(ingredientsById: State.ingredientsById, ingredient: { id: Ingredient.id, name: Ingredient.name }): State.ingredientsById {
  return {
    ...ingredientsById,
    [ingredient.id]: createIngredient(ingredient)
  }
}

function createIngredient({ id, name }: { id: Ingredient.id, name: Ingredient.name }): Ingredient {
  return {
    id,
    name
  };
}
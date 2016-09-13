// @flow

import R from 'ramda';

import type { State, Recipe, Ingredient } from '../types/state';

export function addRecipeId(recipes: State.recipes, recipeId: Recipe.id): State.recipes {
  return [
    ...recipes,
    recipeId
  ]
}

export function addRecipe(recipesById: State.recipesById, recipe: { id: Recipe.id, name: Recipe.name }): State.recipesById {
  return {
    ...recipesById,
    [recipe.id]: createRecipe(recipe)
  }
}

export function addIngredient(recipesById: State.recipesById, { recipeId, ingredientId }: { recipeId: Recipe.id, ingredientId: Ingredient.id }) : State.recipesById {
  return {
    ...recipesById,
    [recipeId]: addIngredientToRecipe(recipesById[recipeId], ingredientId)
  }
}

export function readRecipe(recipesById: State.recipesById, { id }: { id: Recipe.id } ): State.recipesById {
  return {
    ...recipesById,
    [id]: read(recipesById[id])
  }
}

export function unreadRecipe(recipesById: State.recipesById, { id }: { id: Recipe.id }): State.recipesById {
  return {
    ...recipesById,
    [id]: unread(recipesById[id])
  }
}

export function selectRecipe(recipesById: State.recipesById, { id }: { id: Recipe.id }): State.recipesById {
  return {
    ...recipesById,
    [id]: setProperty(recipesById[id], 'isSelected', true)
  }
}

export function unselectRecipe(recipesById: State.recipesById, { id }: { id: Recipe.id }): State.recipesById {
  return {
    ...recipesById,
    [id]: setProperty(recipesById[id], 'isSelected', false)
  }
}

function read(recipe: Recipe) {
  return setProperty(recipe, 'isRead', true);
}

function unread(recipe: Recipe) {
  return setProperty(recipe, 'isRead', false);
}

export function readSelectedRecipes(recipes: State.recipesById): State.recipesById {
  return R.mapObjIndexed(recipe => recipe.isSelected ? read(recipe) : recipe, recipes);
}

export function unreadSelectedRecipes(recipes: State.recipesById): State.recipesById {
  return R.mapObjIndexed(recipe => recipe.isSelected ? unread(recipe) : recipe, recipes);
}

export function selectAllRecipes(recipes: State.recipesById): State.recipesById {
  return R.mapObjIndexed(recipe => setSelected(recipe), recipes);
}

export function unselectAllRecipes(recipes: State.recipesById): State.recipesById {
  return R.mapObjIndexed(recipe => setUnselected(recipe), recipes);
}

function setSelected(recipe: Recipe): Recipe {
  return setProperty(recipe, 'isSelected', true);
}

function setUnselected(recipe: Recipe): Recipe {
  return setProperty(recipe, 'isSelected', false);
}

function setProperty(recipe: Object, property: string, value: any): Object {
  return { ...recipe, [property]: value }
}

function addIngredientToRecipe(recipe: Recipe, ingredientId: Ingredient.id): Recipe {
  return {
    ...recipe,
    ingredients: [...recipe.ingredients, ingredientId]
  };
}

function createRecipe({ id, name }: { id: Recipe.id, name: Recipe.name }): Recipe {
  return {
    id,
    name,
    isRead: false,
    isSelected: false,
    ingredients: []
  };
}

const isRead = (recipe: Recipe) => recipe.isRead;
const isUnread = R.complement(isRead);

export const unreadRecipesCount: (recipes: State.recipesById) => number = R.pipe(
  R.filter(isUnread),
  R.values,
  R.length
);
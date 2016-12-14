// @flow

import R from 'ramda';

import type { Recipe, RecipesById } from '../types/state';

export const INITIAL_STATE = {};

const recipesById = (state: RecipesById = INITIAL_STATE, action: any): RecipesById => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return addRecipe(state, { id: action.id, name: action.name })
    case 'ADD_INGREDIENT':
      return addIngredient(state, { recipeId: action.recipeId, ingredientId: action.ingredientId })
    case 'READ_RECIPE':
      return readRecipe(state, action.id)
    case 'UNREAD_RECIPE':
      return unreadRecipe(state, action.id)
    case 'SELECT_RECIPE':
      return selectRecipe(state, action.id)
    case 'UNSELECT_RECIPE':
      return unselectRecipe(state, action.id)
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

function addRecipe(recipesById: RecipesById, recipe: { id: string, name: string }): RecipesById {
  return {
    ...recipesById,
    [recipe.id]: createRecipe(recipe)
  }
}

function addIngredient(recipesById: RecipesById, { recipeId, ingredientId }: { recipeId: string, ingredientId: string }) : RecipesById {
  return {
    ...recipesById,
    [recipeId]: addIngredientToRecipe(recipesById[recipeId], ingredientId)
  }
}

function readRecipe(recipesById: RecipesById, id: string ): RecipesById {
  return {
    ...recipesById,
    [id]: read(recipesById[id])
  }
}

function unreadRecipe(recipesById: RecipesById, id: string): RecipesById {
  return {
    ...recipesById,
    [id]: unread(recipesById[id])
  }
}

function selectRecipe(recipesById: RecipesById, id: string): RecipesById {
  return {
    ...recipesById,
    [id]: select(recipesById[id])
  }
}

function unselectRecipe(recipesById: RecipesById, id: string): RecipesById {
  return {
    ...recipesById,
    [id]: unselect(recipesById[id])
  }
}

function read(recipe: Recipe) {
  return setProperty(recipe, 'isRead', true);
}

function unread(recipe: Recipe) {
  return setProperty(recipe, 'isRead', false);
}

function readSelectedRecipes(recipes: RecipesById): RecipesById {
  return R.mapObjIndexed(recipe => recipe.isSelected ? read(recipe) : recipe, recipes);
}

function unreadSelectedRecipes(recipes: RecipesById): RecipesById {
  return R.mapObjIndexed(recipe => recipe.isSelected ? unread(recipe) : recipe, recipes);
}

function selectAllRecipes(recipes: RecipesById): RecipesById {
  return R.mapObjIndexed(recipe => select(recipe), recipes);
}

function unselectAllRecipes(recipes: RecipesById): RecipesById {
  return R.mapObjIndexed(recipe => unselect(recipe), recipes);
}

function select(recipe: Recipe): Recipe {
  return setProperty(recipe, 'isSelected', true);
}

function unselect(recipe: Recipe): Recipe {
  return setProperty(recipe, 'isSelected', false);
}

function setProperty(recipe: Object, property: string, value: any): Object {
  return { ...recipe, [property]: value }
}

function addIngredientToRecipe(recipe: Recipe, ingredientId: string): Recipe {
  return {
    ...recipe,
    ingredients: [...recipe.ingredients, ingredientId]
  };
}

function createRecipe({ id, name }: { id: string, name: string }): Recipe {
  return {
    id,
    name,
    isRead: false,
    isSelected: false,
    ingredients: []
  };
}

export default recipesById;

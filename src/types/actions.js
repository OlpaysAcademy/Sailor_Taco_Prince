// @flow

import type { Recipe, Ingredient } from './state';

export type CreateRecipe = {
    type: 'CREATE_RECIPE',
    id: Recipe.id,
    name: Recipe.name
};

export type CreateIngredient = {
    type: 'CREATE_INGREDIENT',
    id: Ingredient.id,
    name: Ingredient.name
};

export type AddIngredient = {
    type: 'ADD_INGREDIENT',
    ingredientId: Ingredient.id,
    recipeId: Recipe.id
};

export type ShowRecipe = {
    type: 'SHOW_RECIPE',
    id: Recipe.id
};

export type ReadRecipe = {
    type: 'READ_RECIPE',
    id: Recipe.id
};

export type UnreadRecipe = {
    type: 'UNREAD_RECIPE',
    id: Recipe.id
};

export type SelectRecipe = {
    type: 'SELECT_RECIPE',
    id: Recipe.id
};

export type UnselectRecipe = {
    type: 'UNSELECT_RECIPE',
    id: Recipe.id
};

export type ReadSelectedRecipes = {
    type: 'READ_SELECTED_RECIPES'
};

export type UnreadSelectedRecipes = {
    type: 'UNREAD_SELECTED_RECIPES'
};

export type SelectAllRecipes = {
    type: 'SELECT_ALL_RECIPES'
};

export type UnselectAllRecipes = {
    type: 'UNSELECT_ALL_RECIPES'
};

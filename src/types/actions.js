// @flow

import type { Recipe, Ingredient } from './state';

export type CreateRecipe = {
    type: 'CREATE_RECIPE',
    id: string,
    name: string
};

export type CreateIngredient = {
    type: 'CREATE_INGREDIENT',
    id: string,
    name: string
};

export type AddIngredient = {
    type: 'ADD_INGREDIENT',
    ingredientId: string,
    recipeId: string
};

export type ShowRecipe = {
    type: 'SHOW_RECIPE',
    id: string
};

export type ReadRecipe = {
    type: 'READ_RECIPE',
    id: string
};

export type UnreadRecipe = {
    type: 'UNREAD_RECIPE',
    id: string
};

export type SelectRecipe = {
    type: 'SELECT_RECIPE',
    id: string
};

export type UnselectRecipe = {
    type: 'UNSELECT_RECIPE',
    id: string
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

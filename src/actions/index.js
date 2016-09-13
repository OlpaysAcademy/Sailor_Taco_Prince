// @flow

import uuid from 'node-uuid';

import type { Recipe, Ingredient } from '../types/state';

import type {
    CreateRecipe,
    CreateIngredient,
    AddIngredient,
    ShowRecipe,
    ReadRecipe,
    UnreadRecipe,
    SelectRecipe,
    UnselectRecipe,
    ReadSelectedRecipes,
    UnreadSelectedRecipes,
    SelectAllRecipes,
    UnselectAllRecipes
} from '../types/actions';

export const createRecipe = (name: Recipe.name): CreateRecipe => {
    return {
        type: 'CREATE_RECIPE',
        id: uuid.v4(),
        name
    }
}

export const createIngredient = (name: Ingredient.name): CreateIngredient => {
    return {
        type: 'CREATE_INGREDIENT',
        id: uuid.v4(),
        name
    }
}

export const addIngredient = (recipeId: Recipe.id, ingredientId: Ingredient.id): AddIngredient => {
    return {
        type: 'ADD_INGREDIENT',
        ingredientId,
        recipeId
    }
}

export const showRecipe = (id: Recipe.id): ShowRecipe => {
    return {
        type: 'SHOW_RECIPE',
        id
    }
}

export const readRecipe = (id: Recipe.id): ReadRecipe => {
    return {
        type: 'READ_RECIPE',
        id
    }
}

export const unreadRecipe = (id: Recipe.id): UnreadRecipe => {
    return {
        type: 'UNREAD_RECIPE',
        id
    }
}

export const selectRecipe = (id: Recipe.id): SelectRecipe => {
    return {
        type: 'SELECT_RECIPE',
        id
    }
}

export const unselectRecipe = (id: Recipe.id): UnselectRecipe => {
    return {
        type: 'UNSELECT_RECIPE',
        id
    }
}

export const readSelectedRecipes = (): ReadSelectedRecipes => {
    return {
        type: 'READ_SELECTED_RECIPES'
    }
}

export const unreadSelectedRecipes = (): UnreadSelectedRecipes => {
    return {
        type: 'UNREAD_SELECTED_RECIPES'
    }
}

export const selectAllRecipes = (): SelectAllRecipes => {
    return {
        type: 'SELECT_ALL_RECIPES'
    }
}

export const unselectAllRecipes = (): UnselectAllRecipes => {
    return {
        type: 'UNSELECT_ALL_RECIPES'
    }
}

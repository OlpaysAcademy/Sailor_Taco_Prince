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

export const createRecipe = (name: string): CreateRecipe => {
    return {
        type: 'CREATE_RECIPE',
        id: uuid.v4(),
        name
    }
}

export const createIngredient = (name: string): CreateIngredient => {
    return {
        type: 'CREATE_INGREDIENT',
        id: uuid.v4(),
        name
    }
}

export const addIngredient = (recipeId: string, ingredientId: string): AddIngredient => {
    return {
        type: 'ADD_INGREDIENT',
        ingredientId,
        recipeId
    }
}

export const showRecipe = (id: string): ShowRecipe => {
    return {
        type: 'SHOW_RECIPE',
        id
    }
}

export const readRecipe = (id: string): ReadRecipe => {
    return {
        type: 'READ_RECIPE',
        id
    }
}

export const unreadRecipe = (id: string): UnreadRecipe => {
    return {
        type: 'UNREAD_RECIPE',
        id
    }
}

export const selectRecipe = (id: string): SelectRecipe => {
    return {
        type: 'SELECT_RECIPE',
        id
    }
}

export const unselectRecipe = (id: string): UnselectRecipe => {
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

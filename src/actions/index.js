/*
 * action types
 */

export const READ_ALL_RECIPES = 'READ_ALL_RECIPES'
export const TOGGLE_RECIPE = 'TOGGLE_RECIPE'
export const ADD_RECIPE = 'ADD_RECIPE'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'

export const readAllRecipes = () => {
    return { type: 'READ_ALL_RECIPES' }
}

export const toggleRecipe = index => {
    return { type: 'TOGGLE_RECIPE', index }
}

export const addRecipe = recipe => {
    return { type: 'ADD_RECIPE', recipe }
}

export const addIngredient = ingredient => {
    return { type: 'ADD_INGREDIENT', ingredient }
}

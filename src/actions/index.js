/*
 * actions
 */

export const readAllRecipes = () => {
    return { type: 'READ_ALL_RECIPES' }
}

export const unreadAllRecipes = () => {
    return { type: 'UNREAD_ALL_RECIPES' }
}

export const toggleRecipe = id => {
    return { type: 'TOGGLE_RECIPE', id }
}

export const addRecipe = recipe => {
    return { type: 'ADD_RECIPE', recipe }
}

export const addIngredient = ingredient => {
    return { type: 'ADD_INGREDIENT', ingredient }
}

export const showRecipe = recipeId => {
    return { type: 'SHOW_RECIPE', recipeId }
}

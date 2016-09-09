import uuid from 'node-uuid';

export const createRecipe = name => {
    return {
        type: 'CREATE_RECIPE',
        id: uuid.v4(),
        name
    }
}

export const createIngredient = name => {
    return {
        type: 'CREATE_INGREDIENT',
        id: uuid.v4(),
        name
    }
}

export const addIngredient = (recipeId, ingredientId) => {
    return {
        type: 'ADD_INGREDIENT',
        ingredientId,
        recipeId
    }
}

export const showRecipe = id => {
    return {
        type: 'SHOW_RECIPE',
        id
    }
}

export const readRecipe = id => {
    return {
        type: 'READ_RECIPE',
        id
    }
}

export const unreadRecipe = id => {
    return {
        type: 'UNREAD_RECIPE',
        id
    }
}

export const selectRecipe = id => {
    return {
        type: 'SELECT_RECIPE',
        id
    }
}

export const unselectRecipe = id => {
    return {
        type: 'UNSELECT_RECIPE',
        id
    }
}

export const readSelectedRecipes = () => {
    return {
        type: 'READ_SELECTED_RECIPES'
    }
}

export const unreadSelectedRecipes = () => {
    return {
        type: 'UNREAD_SELECTED_RECIPES'
    }
}

export const selectAllRecipes = () => {
    return {
        type: 'SELECT_ALL_RECIPES'
    }
}

export const unselectAllRecipes = () => {
    return {
        type: 'UNSELECT_ALL_RECIPES'
    }
}

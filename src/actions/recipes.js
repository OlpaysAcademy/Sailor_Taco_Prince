import { createActions } from 'redux-actions';

export const {
    showRecipe,
    addRecipe, 
    editRecipe,
    removeRecipe,
    addIngredientRecipe,
    removeIngredientRecipe,
    markAsRead,
    markAllAsRead
} = createActions({
    SHOW_RECIPE: (id) => id,
    ADD_RECIPE: (recipe) => recipe,
    EDIT_RECIPE: (id, recipe) => ({id, recipe }),
    REMOVE_RECIPE: (id) => id,
    ADD_INGREDIENT_RECIPE: (id, ingredientName) => ({ id, ingredientName }),
    REMOVE_INGREDIENT_RECIPE: (id, ingredientId) => ({ id, ingredientId }),
    MARK_AS_READ: (id, read) => ({ id, read }),
    MARK_ALL_AS_READ: id => id,
});
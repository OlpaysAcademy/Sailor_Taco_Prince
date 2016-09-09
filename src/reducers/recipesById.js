import { addRecipe, addIngredient, readRecipe, unreadRecipe } from '../modules/recipes';

const recipesById = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return addRecipe(state, { id: action.id, name: action.name })
    case 'ADD_INGREDIENT':
      return addIngredient(state, { recipeId: action.recipeId, ingredientId: action.ingredientId })
    case 'READ_RECIPE':
      return readRecipe(state, { id: action.id })
    case 'UNREAD_RECIPE':
      return unreadRecipe(state, { id: action.id })
    default:
      return state
  }
}

export default recipesById

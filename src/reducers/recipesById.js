import { addRecipe, addIngredient } from '../modules/recipes';

const recipesById = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return addRecipe(state, { id: action.id, name: action.name })
    case 'ADD_INGREDIENT':
      return addIngredient(state, { recipeId: action.recipeId, ingredientId: action.ingredientId })
    default:
      return state
  }
}

export default recipesById

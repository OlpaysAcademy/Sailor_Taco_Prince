import { addRecipeId } from '../modules/recipes';

const recipes = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return addRecipeId(state, action.id)
    default:
      return state
  }
}

export default recipes

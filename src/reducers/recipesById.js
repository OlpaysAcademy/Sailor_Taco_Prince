import { addRecipe } from '../modules/recipes';

const recipes = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return addRecipe(state, { id: action.id, name: action.name })
    default:
      return state
  }
}

export default recipes

import { addIngredient } from '../modules/ingredients';

const ingredientsById = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_INGREDIENT':
            return addIngredient(state, { id: action.id, name: action.name })
        default:
            return state
    }
}

export default ingredientsById

// @flow

import { addIngredient } from '../modules/ingredients';

import type { State } from '../types/state';

const ingredientsById = (state: State.ingredientsById = {}, action: any): State.ingredientsById => {
    switch (action.type) {
        case 'CREATE_INGREDIENT':
            return addIngredient(state, { id: action.id, name: action.name })
        default:
            return state
    }
}

export default ingredientsById

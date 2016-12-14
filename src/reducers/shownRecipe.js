// @flow

import type { ShownRecipe } from '../types/state';

export const INITIAL_STATE = { id: '' };

const shownRecipe = (state: ShownRecipe = INITIAL_STATE, action: any): ShownRecipe => {
    switch (action.type) {
        case 'SHOW_RECIPE':
            return { ...state, id: action.id }
        default:
            return state
    }
}

export default shownRecipe

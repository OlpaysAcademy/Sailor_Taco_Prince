// @flow

import type { State } from '../types/state';

const shownRecipe = (state: State.shownRecipe = { id: '' }, action: any): State.shownRecipe => {
    switch (action.type) {
        case 'SHOW_RECIPE':
            return { ...state, id: action.id }
        default:
            return state
    }
}

export default shownRecipe

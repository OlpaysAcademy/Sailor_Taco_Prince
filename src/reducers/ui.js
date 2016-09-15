// @flow
import { handleActions } from 'redux-actions';

const startingStatus = { };
export default handleActions({
    SHOW_RECIPE: (state, action) => {
        return { ...state, selectedRecipe: action.payload }
    }
}, startingStatus);
// @flow
import R from 'ramda';
import { handleActions } from 'redux-actions';
import { normalize } from 'normalizr';

import {default as ingredientSchema} from '../schemas/ingredient';
import type { Ingredient } from '../schemas/ingredient';

import { getIngredientId } from '../util';

const startingStatus = { result: [], entities: {} };
export default handleActions({
    ADD_INGREDIENT: (state, action) => {
        const name = action.payload;
        const ingredientId = getIngredientId(name, state.entities);
        if (ingredientId) { return state; }
        
        const newIngredient: Ingredient = { name, id: (new Date()).getTime() + '' }
        const ingredient = normalize(newIngredient, ingredientSchema);

        const trans = {
            result: R.append(ingredient.result),
            entities: R.merge(ingredient.entities.ingredients)
        }

        return R.evolve(trans, state);
    }
}, startingStatus);
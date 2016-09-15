// @flow
import R from 'ramda';
import { handleActions } from 'redux-actions';
import { normalize } from 'normalizr';

import {default as recipeSchema} from '../schemas/recipe';
import type { Recipe } from '../schemas/recipe';

const startingStatus = { result: [], entities: {} };
export default handleActions({
    ADD_RECIPE: (state, action) => {
        const newRecipe: Recipe = { ...action.payload, read: false, id: (new Date()).getTime() + '' }
        const recipe = normalize(newRecipe, recipeSchema);
        const trans = {
            result: R.append(recipe.result),
            entities: R.merge(recipe.entities.recipes)
        }

        return R.evolve(trans, state);
    },
    REMOVE_RECIPE: (state, action) => {
        const id = action.payload;
        const trans = {
            result: R.reject(R.equals(id)),
            entities: R.dissoc(id)
        };
        return R.evolve(trans, state);
    },
    SHOW_RECIPE: (state, action) => {
        const id = action.payload;
        const trans = {
            entities: R.assocPath([id, 'read'], true)
        }
        return R.evolve(trans, state);
    },
    MARK_AS_READ: (state, action) => {
        const { id, read } = action.payload;
        const trans = {
            entities: R.assocPath([id, 'read'], read)
        }
        return R.evolve(trans, state);
    },
    MARK_ALL_AS_READ: (state, action) => {
        const read = action.payload;
        const assocRead = R.assoc('read', read)
        const mapAssocRead = R.map(assocRead);
        const trans = { entities: mapAssocRead }
        return R.evolve(trans, state);
    },
    REMOVE_INGREDIENT_RECIPE: (state, action) => {
        const recipeId = action.payload.id;
        const ingredientId = action.payload.ingredientId;

        const recipe = R.prop(recipeId, state.entities);
        recipe.ingredients = R.reject(R.equals(ingredientId), recipe.ingredients);
        const trans = {
            entities: R.assoc(recipeId, recipe)
        }
        return R.evolve(trans, state);
    }
}, startingStatus);
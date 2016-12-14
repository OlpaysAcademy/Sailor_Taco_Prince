// @flow

import recipes, { INITIAL_STATE } from './recipes';
import { createRecipe } from '../actions';

it('should handle initial state', () => {
    expect(
        recipes(undefined, {})
    ).toEqual(INITIAL_STATE);
});

it('createRecipe should add a recipe id', () => {
    const recipeAction = createRecipe('Jalanachos');
    expect(
        recipes(INITIAL_STATE, recipeAction)
    ).toEqual([recipeAction.id]);
});

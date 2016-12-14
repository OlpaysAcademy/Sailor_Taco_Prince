// @flow

import shownRecipe, { INITIAL_STATE } from './shownRecipe';
import { showRecipe } from '../actions';

it('should handle initial state', () => {
    expect(
        shownRecipe(undefined, {})
    ).toEqual(INITIAL_STATE);
});

it('showRecipe should add a recipe id', () => {
    const recipeAction = showRecipe('abc123');
    expect(
        shownRecipe(INITIAL_STATE, recipeAction)
    ).toEqual({
        id: 'abc123'
    });
});

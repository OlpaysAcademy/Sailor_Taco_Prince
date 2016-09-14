// @flow

import ingredientsById, { INITIAL_STATE } from './ingredientsById';
import { createIngredient } from '../actions';

it('should handle initial state', () => {
    expect(
        ingredientsById(undefined, {})
    ).toEqual(INITIAL_STATE);
});

it('createIngredient should add an ingredient', () => {
    const ingredientAction = createIngredient('Avocado');
    expect(
        ingredientsById(INITIAL_STATE, ingredientAction)
    ).toEqual({
        [ingredientAction.id]: {
            id: ingredientAction.id,
            name: ingredientAction.name
        }
    });
});

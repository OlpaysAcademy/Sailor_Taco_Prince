// @flow

import recipesById, { INITIAL_STATE } from './recipesById';
import { createRecipe, addIngredient } from '../actions';

it('should handle initial state', () => {
    expect(
        recipesById(undefined, {})
    ).toEqual(INITIAL_STATE);
});

it('createRecipe should add a recipe', () => {
    const recipeAction = createRecipe('French tacos');
    expect(
        recipesById(INITIAL_STATE, recipeAction)
    ).toEqual({
        [recipeAction.id]: {
            id: recipeAction.id,
            name: recipeAction.name,
            ingredients: [],
            isRead: false,
            isSelected: false
        }
    });
});

it('addIngredient should add an ingredient id to a recipe', () => {
    const recipeAction = createRecipe('French tacos');
    const addIngredientAction = addIngredient(recipeAction.id, 'abc123');
    const state = recipesById(INITIAL_STATE, recipeAction);
    expect(
        recipesById(state, addIngredientAction)
    ).toEqual({
        [recipeAction.id]: {
            id: recipeAction.id,
            name: recipeAction.name,
            ingredients: ['abc123'],
            isRead: false,
            isSelected: false
        }
    });
});

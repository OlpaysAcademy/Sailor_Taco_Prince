import { createActions } from 'redux-actions';

export const {
    addIngredient,
} = createActions({
    ADD_INGREDIENT: (ingredient) => ingredient,
})
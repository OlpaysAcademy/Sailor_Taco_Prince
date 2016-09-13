// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import ReadButtons from './ReadButtons';

import type { State, Recipe } from '../types/state';

type Props = {
    recipesById: State.recipesById,
    ingredientsById: State.ingredientsById,
    shownRecipe: {
        id: Recipe.id
    },
    readRecipe: (id: Recipe.id) => void,
    unreadRecipe: (id: Recipe.id) => void
};

const RecipeHeader = ({ recipesById, shownRecipe, ingredientsById, readRecipe, unreadRecipe }: Props) => {
    const recipe = recipesById[shownRecipe.id];
    const shouldShowTitle = recipesById && shownRecipe.id && recipe;
    const title = shouldShowTitle ? recipe.name : '';
    const readButtons = recipe ? <ReadButtons onRead={() => readRecipe(recipe.id) } onUnread={() => unreadRecipe(recipe.id) } /> : <div></div>;

    return (
        <AppBar
            title={title}
            iconStyleLeft={{ display: 'none' }}
            iconElementRight={readButtons}
            />
    );
}

export default RecipeHeader;
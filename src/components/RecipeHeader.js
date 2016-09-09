// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import ReadButtons from './ReadButtons';

const AppHeader = ({ recipesById, shownRecipe, ingredientsById, readRecipe, unreadRecipe }) => {
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

export default AppHeader;
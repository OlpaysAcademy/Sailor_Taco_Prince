// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import CreateIngredient from '../containers/CreateIngredient';
import Ingredients from '../containers/Ingredients';

const RecipePage = ({ recipesById, shownRecipe, ingredientsById }) => {
    const recipe = recipesById[shownRecipe.id];
    const shouldShowTitle = recipesById && shownRecipe.id && recipe;
    const title = shouldShowTitle ? recipe.name : '';

    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <AppBar
                title={title}
                iconStyleLeft={{ display: 'none' }}
                />
            <div>
                <CreateIngredient />
                <Ingredients />
            </div>
        </div>
    );
}

export default RecipePage;
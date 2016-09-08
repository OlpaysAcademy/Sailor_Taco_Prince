// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import CreateIngredient from './CreateIngredient';
import Ingredients from './Ingredients';

const RecipePage = ({ recipesById, shownRecipe }) => {
    const recipe = recipesById[shownRecipe.id];
    const shouldShowTitle = recipesById && shownRecipe && recipe;
    const title = shouldShowTitle ? recipe.name : '';
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <AppBar
                title={title}
                iconStyleLeft={{ display: 'none' }}
                />
            {
                recipe
                    ?
                    <div>
                        <CreateIngredient />
                        <Ingredients ingredients={recipe.ingredients} />
                    </div>
                    :
                    <div></div>
            }
        </div>
    );
}

export default RecipePage;
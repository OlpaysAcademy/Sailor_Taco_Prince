// @flow

import React from 'react';

import CreateIngredient from '../containers/CreateIngredient';
import Ingredients from '../containers/Ingredients';
import RecipeHeader from '../containers/RecipeHeader';

const RecipePage = () => {
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <RecipeHeader />
            <div>
                <CreateIngredient />
                <Ingredients />
            </div>
        </div>
    );
}

export default RecipePage;
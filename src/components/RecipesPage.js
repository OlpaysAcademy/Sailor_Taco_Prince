// @flow

import React from 'react';

import CreateRecipe from '../containers/CreateRecipe';
import ReadRecipes from '../containers/ReadRecipes';
import Recipes from '../containers/Recipes';

const RecipesPage = () =>
    <div style={{ flex: 1 }}>
        <CreateRecipe />
        <ReadRecipes />
        <Recipes />
    </div>

export default RecipesPage;
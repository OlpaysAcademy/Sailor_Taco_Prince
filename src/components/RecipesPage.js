// @flow

import React from 'react';

import CreateRecipe from '../containers/CreateRecipe';
import ReadRecipes from './ReadRecipes';
import Recipes from '../containers/Recipes';

const RecipesPage = props =>
    <div style={{ flex: 1 }}>
        <CreateRecipe />
        <ReadRecipes />
        <Recipes />
    </div>

export default RecipesPage;
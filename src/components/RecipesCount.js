// @flow

import React from 'react';

const RecipesCount = ({ unreadRecipes }: { unreadRecipes: number }) =>
    <div style={{ padding: '1rem' }}>
        Recipes({unreadRecipes})
    </div>

export default RecipesCount;
// @flow

import React from 'react';

import { List } from 'material-ui/List';

import RecipeItem from './RecipeItem';

import type { RecipesById, OnSelectedRecipe, OnUnselectedRecipe } from '../types/state';

type RecipesProps = {
    recipesById: RecipesById,
    onShowRecipe: (id: string) => void,
    onSelectRecipe: OnSelectedRecipe,
    onUnselectRecipe: OnUnselectedRecipe
};

const Recipes = ({ recipesById, onShowRecipe, onSelectRecipe, onUnselectRecipe }: RecipesProps) => {
    return (
        <List>
            {
                recipesById && Object.keys(recipesById).map(
                    recipeId => <RecipeItem
                        key={recipeId}
                        id={recipeId}
                        onShowRecipe={() => onShowRecipe(recipeId) }
                        onSelectRecipe={onSelectRecipe}
                        onUnselectRecipe={onUnselectRecipe}
                        name={recipesById[recipeId].name}
                        isRead={recipesById[recipeId].isRead}
                        isSelected={recipesById[recipeId].isSelected}
                        />
                )
            }
        </List>
    );
}

export default Recipes;
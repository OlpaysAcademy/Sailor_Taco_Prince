// @flow

import React from 'react';

import {List, ListItem} from 'material-ui/List';

const Recipes = ({ shownRecipe, recipesById, ingredientsById }) => {
    const recipe = recipesById[shownRecipe.id];
    const ingredients = (recipe && recipe.ingredients.length) ? recipe.ingredients.map(ingredient => ingredientsById[ingredient]) : [];
    if (recipe) {
        return (
            <List>
                {
                    ingredients.length ? ingredients.map(ingredient => <ListItem key={ingredient.id} primaryText={ingredient.name} />) : <div>Add some ingredients to your super recipe!</div>
                }
            </List>
        );
    }
    return <div></div>
}

export default Recipes;
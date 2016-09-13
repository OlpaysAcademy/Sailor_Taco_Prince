import React from 'react';
import Recipe from './Recipe';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);
        this.onShowIngredients = this.onShowIngredients.bind(this);
        this.onToggleRecipe = this.onToggleRecipe.bind(this);
    }
    onShowIngredients(recipeId) {
        this.props.onShowIngredients(recipeId);
    }
    onToggleRecipe(recipeId) {
        this.props.onToggleRecipe(recipeId);
    }
    render() {
        const createRecipeItem = item => <Recipe onShowIngredients={this.onShowIngredients} onToggleRecipe={this.onToggleRecipe} recipe={item}/>;
        return (
            <div>
                { this.props.recipes.map(createRecipeItem) }
            </div>
        )
    }
}

export default RecipesList;

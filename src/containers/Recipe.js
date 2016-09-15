import { connect } from 'react-redux'

import { markAsRead, addIngredientRecipe, removeIngredientRecipe } from '../actions/recipes'
import { addIngredient } from '../actions/ingredients'
import DumbRecipe from '../components/DumbRecipe';


const mapStateToProps = (state) => {
    const recipe = state.recipes.entities[state.ui.selectedRecipe];
    return {
        recipe,
        ingredients: recipe ? recipe.ingredients.map(id => state.ingredients.entities[id]) : []
    };
}

const mapDispatchToProps = (dispatch) => ({
    onRecipeUnread: (id, read) => dispatch(markAsRead(id, read)),
    onNewIngredientSubmit: (id, name) => {
        if (!name) { return; }
        dispatch(addIngredient(name));
        dispatch(addIngredientRecipe(id, name));
    },
    onIngredientDelete: (recipeId, ingredientId) => {
        dispatch(removeIngredientRecipe(recipeId, ingredientId));
    }
});

const Recipe = connect(
    mapStateToProps,
    mapDispatchToProps
)(DumbRecipe);

export default Recipe;
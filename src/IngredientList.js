import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientItem from './IngredientItem';

class IngredientList extends Component {
    render() {
        if (!this.props.id) {
            return (
                <div>
                </div>
            )
        }

        return (
            <ul>
                {this.props.recipe.ingredients.map((ingredient, index) => <IngredientItem key={index} ingredient={ingredient} />)}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        recipe: state.recipes.find(recipe => recipe.id === state.selectedRecipe),
        id: state.selectedRecipe
    }
}

export default connect(
    mapStateToProps,
    null
)(IngredientList);

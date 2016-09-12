import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';

class RecipeList extends Component {
    render() {
        return (
            <ul>
                {this.props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    };
}

export default connect(
    mapStateToProps,
    null
)(RecipeList);

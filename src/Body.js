import React, { Component } from 'react';
import { connect } from 'react-redux';
import IngredientList from './IngredientList';
import AddIngredient from './AddIngredient';
import ToggleButton from './ToggleButton';

class Body extends Component {
    render() {
        if (!this.props.recipe) {
            return (
                <div style={{flex: 3}}>
                    Select a recipe
                </div>
            )
        }

        return (
            <div style={{flex: 3}}>
                {this.props.recipe.name}
                <ToggleButton recipe={this.props.recipe} />
                <br />
                <IngredientList />
                <AddIngredient />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        recipe: state.recipes.find(recipe => recipe.id === state.selectedRecipe)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        toggleRead: id => {
            dispatch({ type: 'TOGGLE_READ', id })
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);

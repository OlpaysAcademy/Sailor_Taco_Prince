import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleButton from './ToggleButton';

class RecipeItem extends Component {
    render() {
        return (
            <li>
                <span onClick={() => this.props.select(this.props.recipe.id) }>{this.props.recipe.name}</span>
                <ToggleButton recipe={this.props.recipe} />
            </li>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        select: id => {
            dispatch({ type: 'SELECT', id })
        },
        toggleRead: id => {
            dispatch({ type: 'TOGGLE_READ', id })
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(RecipeItem);

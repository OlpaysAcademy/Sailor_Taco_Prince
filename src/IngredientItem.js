import React, { Component } from 'react';

class RecipeItem extends Component {
    render() {
        return (
            <li>
                {this.props.ingredient}
            </li>
        );
    }
}

export default RecipeItem;

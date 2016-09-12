import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddIngredient extends Component {
    render() {
        let input;
        if (!this.props.id) {
            return (
                <div>
                </div>
            )
        }

        return (
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                this.props.addIngredient(input.value, this.props.id);
                input.value = '';
            }}>
                <input ref={node => { input = node; }} />
                <input type="submit" value="Add Ingredient" />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addIngredient: (name, id) => {
            dispatch({ type: 'ADD_INGREDIENT', name, id });
        }
    }
}

function mapStateToProps(state) {
    return {
        id: state.selectedRecipe
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddIngredient);

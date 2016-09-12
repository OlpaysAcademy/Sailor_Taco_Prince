import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateRecipe extends Component {
    render() {
        let input;

        return (
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                this.props.createRecipe(input.value);
                input.value = ''
            }}>
                <input ref={node => { input = node; }} />
                <input type="submit" value="Add Recipe" />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createRecipe: name => {
            dispatch({ type: 'ADD_RECIPE', name });
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(CreateRecipe);

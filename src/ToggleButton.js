import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToggleButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.toggleRead(this.props.recipe.id)}>
                {this.props.recipe.read ? 'mark as unread' : 'mark as read'}
            </button>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        toggleRead: id => {
            dispatch({ type: 'TOGGLE_READ', id })
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(ToggleButton);

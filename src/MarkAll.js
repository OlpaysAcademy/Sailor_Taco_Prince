import React, { Component } from 'react';
import { connect } from 'react-redux';

class MarkAll extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.markAllAsRead}>Mark all as read</button>
                <button onClick={this.props.markAllAsUnread}>Mark all as unread</button>
                <br />
                <span>Read recipes: {this.props.readRecipes}</span>
                <br />
                <span>Unread recipes: {this.props.unreadRecipes}</span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        readRecipes: state.recipes.reduce((counter, recipe) => {
            if (recipe.read) {
                return counter + 1;
            }
            return counter;
        }, 0),
        unreadRecipes: state.recipes.reduce((counter, recipe) => {
            if (!recipe.read) {
                return counter + 1;
            }
            return counter;
        }, 0)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        markAllAsRead: () => {
            dispatch({ type: 'MARK_ALL_AS_READ'});
        },
        markAllAsUnread: () => {
            dispatch({ type: 'MARK_ALL_AS_UNREAD'});
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkAll);

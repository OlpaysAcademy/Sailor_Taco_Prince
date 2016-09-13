import React from 'react';

class ReadRecipeButton extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.onToggleRecipe(this.props.recipe.id);
    }
    render() {
        return (
            <button className='btn btn-primary btn-sm' onClick={this.onClick}>{ this.props.recipe.isRead ? 'Mark as unread' : 'Mark as read' }</button>
        )
    }
}

export default ReadRecipeButton;

import React from 'react';

const recipeItem = {
    height: 40
};

const recipeName = {
    cursor: 'pointer',
    color: '#89949B'
};

const iconStyle = {
    marginRight: 5,
};

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.onShowIngredients = this.onShowIngredients.bind(this);
        this.onToggleRecipe = this.onToggleRecipe.bind(this);
    }
    onShowIngredients() {
        this.props.onShowIngredients(this.props.recipe.id);
    }
    onToggleRecipe() {
        this.props.onToggleRecipe(this.props.recipe.id);
    }
    render() {
        return (
            <div>
                <div className="col-xs-12" style={recipeItem}>
                    <span className="col-xs-7 text-left">
                        { this.props.recipe.isRead
                            ? <span style={iconStyle} className="glyphicon glyphicon-eye-open iconItem"></span>
                            : <span style={iconStyle} className="glyphicon glyphicon-eye-close iconItem"></span>
                        }
                        <a style={recipeName} onClick={this.onShowIngredients}><strong>{this.props.recipe.name}</strong></a>
                    </span>
                    <button className='btn btn-primary btn-xs' onClick={this.onToggleRecipe}>{ this.props.recipe.isRead ? 'Mark as unread' : 'Mark as read' }</button>
                </div>
            </div>
        );
    }
}

export default Recipe;

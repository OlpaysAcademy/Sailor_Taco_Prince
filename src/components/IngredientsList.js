import React from 'react';
// import NewIngredient from './NewIngredient';

const mainContent = {
    'margin-top': 100
};

const ingredientItem = {
    height: 50,
    borderBottom: '1px solid black',
    display: 'flexbox',
    alignItems: 'center',
    justifyContent: 'center'
}

const ingredientsHeader = {
    height: 50,
    borderBottom: '2px solid black'
}

class Ingredients extends React.Component {
    constructor() {
        super();
    }
    render(){
        const createIngredientItem = item => {
            return (
                <div style={ingredientItem}>
                    <span className="row">
                        <span className="text-center">{item}</span>
                    </span>
                </div>
            )
        };
        return (
            <div>
                <div style={ingredientsHeader}>
                    <span className="row">
                        <span className="text-center"><strong>Ingredients</strong></span>
                    </span>
                </div>
                <div>{ this.props.ingredients ? this.props.ingredients.map(createIngredientItem) : 'Select a recipe!'} </div>
            </div>
        )
    }
}

export default Ingredients;

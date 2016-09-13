import React from 'react';

const inputLabel = {
    marginRight: 5
};

const formStyle = {
    marginTop: 50,
    marginBottom: 10
}

class NewIngredient extends React.Component {
    constructor() {
        super();
        this.state = { newIngredient: '' };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const newIngredient = {
            name: this.state.newIngredient,
            recipeId: this.props.recipeToShow
        }
        this.props.onNewIngredientSubmit(newIngredient);
        this.setState({ newIngredient: '' });
        this.refs.newIngredient.focus();
        return;
    }
    onChange(e){
        this.setState({
            newIngredient: e.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={formStyle}>
                <label style={inputLabel}>New Ingredient</label>
                <input ref='newIngredient' type='text' onChange={this.onChange} value={this.state.newIngredient}/>
                <button className="btn btn-primary btn-sm m-l-sm" type='submit'>Add</button>
            </form>
        );
    }
}

export default NewIngredient;

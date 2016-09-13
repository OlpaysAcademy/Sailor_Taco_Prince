import React from 'react';

const inputLabel = {
    marginRight: 5
};

const formStyle = {
    marginBottom: 20
};

class NewRecipe extends React.Component {
    constructor() {
        super();
        this.state = { newRecipe: '' };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onNewRecipeSubmit(this.state.newRecipe);
        this.setState({ newRecipe: '' });
        this.refs.newRecipe.focus();
        return;
    }
    onChange(e){
        this.setState({
            newRecipe: e.target.value
        });
    }
    render() {
        return (
            <div className="text-center" style={formStyle}>
                <form onSubmit={this.handleSubmit}>
                    <label style={inputLabel}>New Recipe</label>
                    <input ref='newRecipe' type='text' onChange={this.onChange} value={this.state.newRecipe}/>
                    <button className="btn btn-primary btn-sm m-l-sm" type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

export default NewRecipe;

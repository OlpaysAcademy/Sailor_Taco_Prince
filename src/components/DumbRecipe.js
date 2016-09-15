// import R from 'ramda';
import React, { Component } from 'react';
import { Panel, Glyphicon, Button, ListGroup, ListGroupItem, Form, FormGroup, FormControl } from 'react-bootstrap';

// import type { Recipe } from '../schema/ingredient';

class DumbRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ name: '' });
        this.props.onNewIngredientSubmit(this.props.recipe.id, this.state.name);
    }

    render() {
        if (!this.props.recipe) { return (<p>select a recipe</p>) }

        const read = this.props.recipe.read;
        return (
            <div>
                <Panel header={this.props.recipe.name} bsStyle="primary">
                    <Button
                        onClick={() => this.props.onRecipeUnread(this.props.recipe.id, !read) }>
                        <Glyphicon glyph="eye-open" /> Mark as {read ? 'Unread' : 'Read'}
                    </Button>
                    <h1>Ingredients ({this.props.ingredients.length})</h1>
                    <ListGroup>
                        {this.props.ingredients.map(ingr => (
                            <ListGroupItem key={ingr.id}>
                                {ingr.name}
                                <Button
                                    style={{ float: 'right' }}
                                    bsSize="xsmall"
                                    onClick={() => this.props.onIngredientDelete(this.props.recipe.id, ingr.id) }>
                                    <Glyphicon glyph="trash" />
                                </Button>
                            </ListGroupItem>
                        )) }
                    </ListGroup>
                    <Form inline onSubmit={(event) => this.handleSubmit(event) } style={{ marginTop: 10 }}>
                        <FormGroup controlId="formInlineName">
                            <FormControl
                                type="text"
                                placeholder="Add Ingredient"
                                value={this.state.name}
                                onChange={event => this.handleNameChange(event) }  />
                        </FormGroup>
                        <input type="submit" style={{display: 'none'}} />
                    </Form>
                </Panel>
            </div>
        )
    }
}

export default DumbRecipe;
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Form, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

import type { Recipe } from '../schema/ingredient';

class DumbRecipeList extends Component {
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
        this.props.onNewRecipeSubmit(this.state.name);
    }

    render() {
        return (
            <div>
                <Button
                    onClick={() => this.props.onMarkAllAsRead(true) }>
                    Mark All As Read
                </Button>
                <Button
                    onClick={() => this.props.onMarkAllAsRead(false) }>
                    Mark All As UnRead
                </Button>
                <ListGroup>
                    {this.props.recipes.map((recipe: Recipe) => (
                        <ListGroupItem key={recipe.id}>
                            <a href="#" onClick={() => this.props.onRecipeSelect(recipe.id) }>
                                {recipe.name}
                                {' '}
                                ({recipe.ingredients.length})
                                {' '}
                                {!recipe.read &&
                                    <Glyphicon glyph="exclamation-sign" />
                                }
                            </a>
                        </ListGroupItem>
                    )) }
                    <Form inline onSubmit={(event) => this.handleSubmit(event) } style={{ marginTop: 10 }}>
                        <FormGroup controlId="formInlineName">
                            <FormControl
                                type="text"
                                placeholder="Name your Recipe"
                                value={this.state.name}
                                onChange={event => this.handleNameChange(event) }  />
                        </FormGroup>
                        {' '}
                        <input type="submit" style={{ display: 'none' }} />
                    </Form>
                </ListGroup>
            </div>
        )
    }
}

export default DumbRecipeList;
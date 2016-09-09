// @flow

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const CreateIngredient = ({ shownRecipe, onClick }) => {
    let input;
    if (shownRecipe.id) {
        return (
            <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    onClick(shownRecipe.id, input.value)
                    input.value = ''
                } }>
                <TextField hintText="New ingredient" ref={node => { input = node ? node.input : null } } />
                <RaisedButton type="submit" label="Create" primary={true} />
            </form>
        );
    }
    return <div></div>;
}

export default CreateIngredient;
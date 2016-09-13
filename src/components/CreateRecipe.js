// @flow

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import type { Recipe } from '../types/state';

type Props = {
    onClick: (name: Recipe.id) => void
}

const CreateRecipe = ({ onClick }: Props) => {
    let input;
    return (
        <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
            onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                onClick(input.value)
                input.value = ''
            } }>
            <TextField hintText="New recipe" ref={node => { input = node.input } } />
            <RaisedButton type="submit" label="Create" secondary={true} />
        </form>
    );
}

export default CreateRecipe;
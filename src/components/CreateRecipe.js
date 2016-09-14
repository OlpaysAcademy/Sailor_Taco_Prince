// @flow

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import type { Recipe } from '../types/state';

type Props = {
    createRecipe: (name: string) => void
}

const onSubmit = (e, input, createRecipe) => {
    e.preventDefault()
    if (!input.value.trim()) {
        return
    }
    createRecipe(input.value)
    input.value = ''
};

const CreateRecipe = ({ createRecipe }: Props) => {
    let input;
    return (
        <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
            onSubmit={e => onSubmit(e, input, createRecipe)}>
            <TextField hintText="New recipe" ref={node => { input = node.input } } />
            <RaisedButton type="submit" label="Create" secondary={true} />
        </form>
    );
}

export default CreateRecipe;
// @flow

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const CreateRecipe = props =>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <TextField hintText="New recipe" />
        <RaisedButton label="Create" secondary={true} />
    </div>

export default CreateRecipe;
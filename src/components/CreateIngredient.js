// @flow

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const CreateIngredient = props =>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <TextField hintText="New ingredient" />
        <RaisedButton label="Create" primary={true} />
    </div>

export default CreateIngredient;
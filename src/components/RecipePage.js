// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';

import CreateIngredient from './CreateIngredient';
import Ingredients from './Ingredients';

const Page = props =>
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <AppBar title={props.selectedRecipeName} iconStyleLeft={{display: 'none'}} />
        <CreateIngredient />
        <Ingredients />
    </div>

export default Page;
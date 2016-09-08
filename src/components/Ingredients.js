// @flow

import React from 'react';

import {List, ListItem} from 'material-ui/List';

const Recipes = ({ ingredients }) =>
    <List>
        {
            ingredients && ingredients.map(ingredient => <ListItem primaryText={ingredient.name} />)
        }
    </List>

export default Recipes;
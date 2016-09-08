// @flow

import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

const ReadRecipes = props =>
    <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
        <div>
            <Checkbox />
        </div>
        <RaisedButton style={{ margin: '0px 5px' }} label="Mark as unread" />
        <RaisedButton style={{ margin: '0px 5px' }} label="Mark as read" />
    </div>

export default ReadRecipes;
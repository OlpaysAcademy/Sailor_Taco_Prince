// @flow

import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ReadButtons from './ReadButtons';

const ReadRecipes = ({ readSelectedRecipes, unreadSelectedRecipes, selectAllRecipes, unselectAllRecipes }) =>
    <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
        <div>
            <Checkbox onCheck={(ev, isInputChecked) => isInputChecked ? selectAllRecipes() : unselectAllRecipes()} />
        </div>
        <ReadButtons onRead={() => readSelectedRecipes() } onUnread={() => unreadSelectedRecipes() } />
    </div>

export default ReadRecipes;
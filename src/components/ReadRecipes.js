// @flow

import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ReadButtons from './ReadButtons';

const ReadRecipes = props =>
    <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
        <div>
            <Checkbox />
        </div>
        <ReadButtons />
    </div>

export default ReadRecipes;
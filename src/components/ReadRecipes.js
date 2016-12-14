// @flow

import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ReadButtons from './ReadButtons';

type Props = {
    readSelectedRecipes: () => void,
    unreadSelectedRecipes: () => void,
    selectAllRecipes: () => void,
    unselectAllRecipes: () => void
};

const ReadRecipes = ({ readSelectedRecipes, unreadSelectedRecipes, selectAllRecipes, unselectAllRecipes }: Props) =>
    <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
        <div>
            <Checkbox onCheck={(ev, isInputChecked) => isInputChecked ? selectAllRecipes() : unselectAllRecipes()} />
        </div>
        <ReadButtons onRead={() => readSelectedRecipes() } onUnread={() => unreadSelectedRecipes() } />
    </div>

export default ReadRecipes;
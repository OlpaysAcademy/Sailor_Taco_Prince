import React, { Component } from 'react';

import CreateRecipe from './CreateRecipe';
import MarkAll from './MarkAll';
import RecipeList from './RecipeList';

class Sidebar extends Component {
    render() {
        return (
            <div style={{flex: 1}}>
                <CreateRecipe />
                <MarkAll />
                <RecipeList />
            </div>
        );
    }
}

export default Sidebar;

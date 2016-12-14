// @flow

import React from 'react';

import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import RecipeShowIcon from './RecipeShowIcon';

import type { Recipe } from '../types/state';
import type { OnSelectedRecipe, OnUnselectedRecipe } from '../types/state';

type RecipeItemProps = {
    name: string,
    id: string,
    isRead: boolean,
    isSelected: boolean,
    onShowRecipe: () => void,
    onSelectRecipe: OnSelectedRecipe,
    onUnselectRecipe: OnUnselectedRecipe
};

const RecipeItem = ({ name, id, isRead, isSelected, onShowRecipe, onSelectRecipe, onUnselectRecipe }: RecipeItemProps) => {
    const style = { backgroundColor: !isRead ? 'rgba(0,0,0,0.2)' : null };
    return (
        <ListItem
            primaryText={name}
            style={style}
            leftCheckbox={<Checkbox checked={isSelected} onCheck={(ev, isInputChecked) => isInputChecked ? onSelectRecipe(id) : onUnselectRecipe(id)} />}
            rightIconButton={<RecipeShowIcon onClick={onShowRecipe} />}
            />
    );
}

export default RecipeItem;
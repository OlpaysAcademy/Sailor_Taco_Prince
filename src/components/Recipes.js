// @flow

import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

/*
 * Learning: Wrappers should always pass down props to inner elements
 * The problem was that RecipeShowIcon was not passing down styles that ListItem should give to IconButton
 * Passing down props to wrapper's children also allows to pass down handlers
 */
const RecipeShowIcon = props => <IconButton {...props} children={<FontIcon className="material-icons">visibility</FontIcon>} />

type OnSelectedRecipe = (id: string) => void;
type OnUnselectedRecipe = (id: string) => void;

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

type RecipesProps = {
    recipesById: Object,
    onShowRecipe: (id: string) => void,
    onSelectRecipe: OnSelectedRecipe,
    onUnselectRecipe: OnUnselectedRecipe
};

const Recipes = ({ recipesById, onShowRecipe, onSelectRecipe, onUnselectRecipe }: RecipesProps) => {
    return (
        <List>
            {
                recipesById && Object.keys(recipesById).map(
                    recipeId => <RecipeItem
                        key={recipeId}
                        id={recipeId}
                        onShowRecipe={() => onShowRecipe(recipeId) }
                        onSelectRecipe={onSelectRecipe}
                        onUnselectRecipe={onUnselectRecipe}
                        name={recipesById[recipeId].name}
                        isRead={recipesById[recipeId].isRead}
                        isSelected={recipesById[recipeId].isSelected}
                        />
                )
            }
        </List>
    );
}

export default Recipes;
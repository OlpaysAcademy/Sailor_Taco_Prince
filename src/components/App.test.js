import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import App from './App';
import RecipesCount from './RecipesCount';
import RecipeShowIcon from './RecipeShowIcon';
import CreateRecipe from './CreateRecipe';
import RecipeItem from './RecipeItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('updates read recipes count and recipe list item when user clicks a recipe show icon', () => {
    const wrapper = mount(<App />);
    const createRecipe = wrapper.find(CreateRecipe);
    const recipesCount = wrapper.find(RecipesCount);
    expect(recipesCount.props().unreadRecipes).toEqual(0);
    createRecipe.props().createRecipe('Jalapeños');
    const recipeItem = wrapper.find(RecipeItem);
    expect(recipeItem.props().isRead).toEqual(false);
    expect(recipesCount.props().unreadRecipes).toEqual(1);
    recipeItem.find(RecipeShowIcon).simulate('click');
    expect(recipeItem.props().isRead).toEqual(true);
});

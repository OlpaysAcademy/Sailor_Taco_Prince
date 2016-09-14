// @flow

import { connect } from 'react-redux'
import R from 'ramda';

import RecipesCount from '../components/RecipesCount';

import type { RecipesById, Recipe } from '../types/state';

const isRead = (recipe: Recipe) => recipe.isRead;
const isUnread = R.complement(isRead);

const unreadRecipesCount: (recipes: RecipesById) => number = R.pipe(
  R.filter(isUnread),
  R.values,
  R.length
);

const mapStateToProps = ({ recipesById }) => {
    return {
        unreadRecipes: unreadRecipesCount(recipesById)
    }
}

export default connect(
    mapStateToProps,
    null
)(RecipesCount);

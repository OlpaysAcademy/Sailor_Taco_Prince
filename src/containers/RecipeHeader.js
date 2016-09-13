// @flow

import { connect } from 'react-redux'

import RecipeHeader from '../components/RecipeHeader'
import { readRecipe, unreadRecipe } from '../actions'

const mapDispatchToProps = dispatch => {
    return {
        readRecipe: id => {
            dispatch(readRecipe(id))
        },
        unreadRecipe: id => {
            dispatch(unreadRecipe(id))
        }
    }
}

const mapStateToProps = ({ shownRecipe, recipesById, ingredientsById }) => {
    return {
        shownRecipe,
        recipesById,
        ingredientsById
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeHeader);

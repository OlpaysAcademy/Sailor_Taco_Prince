// @flow

import { connect } from 'react-redux'

import { showRecipe, readRecipe, selectRecipe, unselectRecipe } from '../actions'
import Recipes from '../components/Recipes'

const mapStateToProps = ({ recipesById }) => {
    return {
        recipesById
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowRecipe: id => {
            dispatch(showRecipe(id))
            dispatch(readRecipe(id))
        },
        onSelectRecipe: id => {
            dispatch(selectRecipe(id))
        },
        onUnselectRecipe: id => {
            dispatch(unselectRecipe(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);

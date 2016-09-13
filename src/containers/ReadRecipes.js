// @flow

import { connect } from 'react-redux'

import ReadRecipes from '../components/ReadRecipes'
import { readSelectedRecipes, unreadSelectedRecipes, selectAllRecipes, unselectAllRecipes } from '../actions'

const mapDispatchToProps = dispatch => {
    return {
        readSelectedRecipes: () => {
            dispatch(readSelectedRecipes());
        },
        unreadSelectedRecipes: () => {
            dispatch(unreadSelectedRecipes());
        },
        selectAllRecipes: () => {
            dispatch(selectAllRecipes());
        },
        unselectAllRecipes: () => {
            dispatch(unselectAllRecipes());
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ReadRecipes);

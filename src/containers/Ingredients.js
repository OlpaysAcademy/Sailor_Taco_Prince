// @flow

import { connect } from 'react-redux'

import Ingredients from '../components/Ingredients'

const mapStateToProps = ({ shownRecipe, recipesById, ingredientsById }) => {
    return {
        shownRecipe,
        recipesById,
        ingredientsById
    }
}

export default connect(
    mapStateToProps,
    null
)(Ingredients);

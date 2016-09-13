// @flow

import { connect } from 'react-redux'
import { createIngredient, addIngredient } from '../actions'
import CreateIngredient from '../components/CreateIngredient'

const mapStateToProps = ({ shownRecipe }) => {
    return {
        shownRecipe,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (recipeId, name) => {
            const createIngredientAction = createIngredient(name);
            dispatch(createIngredientAction);
            dispatch(addIngredient(recipeId, createIngredientAction.id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateIngredient);

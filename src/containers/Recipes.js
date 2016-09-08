import { connect } from 'react-redux'

import { showRecipe } from '../actions'
import Recipes from '../components/Recipes'

const mapStateToProps = state => {
    return {
        recipesById: state.recipesById
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowRecipe: id => {
            dispatch(showRecipe(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);

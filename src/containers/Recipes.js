import { connect } from 'react-redux'

import { showRecipe, readRecipe } from '../actions'
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);

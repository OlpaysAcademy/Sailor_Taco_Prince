import { connect } from 'react-redux'
import { toggleRecipe } from '../actions'
import ReadRecipeButton from '../components/ReadRecipeButton'

const mapStateToProps = (state) => {
  return {
    recipe: _.find(state.recipes, recipe => recipe.id === state.recipeToShow)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleRecipe: (id) => {
      dispatch(toggleRecipe(id))
    },
  }
}

const MarkRecipeAsRead = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReadRecipeButton)

export default MarkRecipeAsRead
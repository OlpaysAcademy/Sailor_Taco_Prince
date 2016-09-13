import { connect } from 'react-redux'
import { toggleRecipe, showRecipe } from '../actions'
import RecipesList from '../components/RecipesList'

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleRecipe: (id) => {
      dispatch(toggleRecipe(id))
    },
    onShowIngredients: (id) => {
      dispatch(showRecipe(id))
    }
  }
}

const GetRecipesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList)

export default GetRecipesList

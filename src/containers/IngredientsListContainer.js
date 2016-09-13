import { connect } from 'react-redux'
import IngredientsList from '../components/IngredientsList'

const mapStateToProps = (state) => {
  return {
    ingredients: state.recipeToShow ? _.find(state.recipes, recipe => recipe.id === state.recipeToShow).ingredients : ''
  }
}

const GetIngredientsList = connect(
  mapStateToProps,
  null
)(IngredientsList)

export default GetIngredientsList

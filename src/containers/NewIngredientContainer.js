import { connect } from 'react-redux'
import { addIngredient } from '../actions'
import NewIngredient from '../components/NewIngredient'

const mapStateToProps = (state) => {
  return {
    recipeToShow: state.recipeToShow ? _.find(state.recipes, recipe => recipe.id === state.recipeToShow).id : ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewIngredientSubmit: (newIngredient) => {
      dispatch(addIngredient(newIngredient))
    }
  }
}

const AddNewIngredient = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewIngredient)

export default AddNewIngredient

import { connect } from 'react-redux'
import { addRecipe } from '../actions'
import NewRecipe from '../components/NewRecipe'

const mapDispatchToProps = (dispatch) => {
  return {
    onNewRecipeSubmit: (name) => {
        const newRecipe = {
            id: Date.now(),
            name
        }
      dispatch(addRecipe(newRecipe))
    }
  }
}

const AddNewRecipe = connect(
  null,
  mapDispatchToProps
)(NewRecipe)

export default AddNewRecipe

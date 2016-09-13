import { connect } from 'react-redux'
import { readAllRecipes } from '../actions'
import ReadAllButton from '../components/ReadAllButton'

const mapDispatchToProps = (dispatch) => {
  return {
    onMarkAllAsRead: () => {
      dispatch(readAllRecipes())
    }
  }
}

const MarkAllRecipesAsRead = connect(
    null,
    mapDispatchToProps
)(ReadAllButton)

export default MarkAllRecipesAsRead
